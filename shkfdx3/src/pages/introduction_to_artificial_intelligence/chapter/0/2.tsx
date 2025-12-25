import { useMemo } from "react"
import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import { ref, useProxyStore } from "@carefrees/valtio"
import useSelectPractice from "@/components/select"

import data1 from "../data/1/2.json"
import data2 from "../data/2/2.json"
import data3 from "../data/3/2.json"
import data4 from "../data/4/2.json"
import data5 from "../data/5/2.json"
import data6 from "../data/6/2.json"
import data7 from "../data/7/2.json"
import data8 from "../data/8/2.json"
import data9 from "../data/9/2.json"
import data10 from "../data/10/2.json"
import data11 from "../data/11/2.json"
import data12 from "../data/comprehensive/2.json"

const sumList = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8, ...data9, ...data10, ...data11, ...data12].map((it, index) => ({ ...it, id: index + 1 }))


// 一个选择
const a = sumList.filter((it) => {
  const is = it.options.filter(it => it.isTrue)
  return is.length === 1
})
console.log('一个选择', a)

// 二个选择
const b = sumList.filter((it) => {
  const is = it.options.filter(it => it.isTrue)
  return is.length === 2
})
console.log('二个选择', b)

// 三个选择
const c = sumList.filter((it) => {
  const is = it.options.filter(it => it.isTrue)
  return is.length === 3
})
console.log('三个选择', c)

// 四个选择
const d = sumList.filter((it) => {
  const is = it.options.filter(it => it.isTrue)
  return is.length === 4
})
console.log('四个选择', d)

// 五个选择
const e = sumList.filter((it) => {
  const is = it.options.filter(it => it.isTrue)
  return is.length === 5
})
console.log('五个选择', e)

const NetworkOne = () => {

  const { state, dispatch, } = useProxyStore({
    dataList: ref(randomArray(sumList)),
    isRead: true,
    isOnlyAnswer: true,
  })

  const { render, onError, onSuccess } = useSelectPractice({ sumList, dispatch })

  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer


  return <MainLayout
    // title="多选题 合集（不含综合试题）"
    title={
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        多选题 合集（含综合试题）
        {render}
      </div>
    }
  >
    <TipButton
      style={{ top: 120 }}
      items={[
        {
          onClick: () => {
            dispatch({ isRead: !isRead, isOnlyAnswer: false })
          },
          children: isRead ? "答题模式" : "背题模式"
        },
        {
          onClick: () => {
            dispatch({ dataList: ref(randomArray(sumList)) })
          },
          children: "刷新顺序"
        },
        {
          onClick: () => {
            dispatch({ isOnlyAnswer: !isOnlyAnswer })
          },
          children: isOnlyAnswer ? "隐藏" : "显示"
        },
      ]}
    />
    {useMemo(() => {
      return dataList.map((item, index) => {
        return <QItem
          key={item.id}
          isRead={isRead}
          isMulti
          topic={item.topic}
          isOnlyAnswer={isOnlyAnswer}
          options={randomArray(item.options || [])}
          sort={index + 1}
          onError={() => {
            onError(item)
          }}
          onSuccess={() => {
            onSuccess(item)
          }}
        />
      })
    }, [dataList, isRead, isOnlyAnswer])}
  </MainLayout>
}

export default NetworkOne