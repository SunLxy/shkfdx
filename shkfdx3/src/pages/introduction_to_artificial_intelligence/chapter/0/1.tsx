import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import { useProxyStore } from "@carefrees/valtio"
import { useMemo } from "react"
import useSelectPractice from "@/components/select"

import data1 from "../data/1/1.json"
import data2 from "../data/2/1.json"
import data3 from "../data/3/1.json"
import data4 from "../data/4/1.json"
import data5 from "../data/5/1.json"
import data6 from "../data/6/1.json"
import data7 from "../data/7/1.json"
import data8 from "../data/8/1.json"
import data9 from "../data/9/1.json"
import data10 from "../data/10/1.json"
import data11 from "../data/11/1.json"
import data12 from "../data/comprehensive/1.json"

const sumList = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8, ...data9, ...data10, ...data11, ...data12].map((it, index) => ({ ...it, id: index + 1 }))

const NetworkOne = () => {

  const { state, dispatch } = useProxyStore({
    dataList: randomArray(sumList),
    isRead: true,
    isOnlyAnswer: true,
    errorList: [],
  })

  const { render, onError, onSuccess } = useSelectPractice({ sumList, dispatch })

  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer

  return <MainLayout
    title={
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        单选题 合集（含综合试题）
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
            dispatch({ dataList: randomArray(sumList) })
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
          isOnlyAnswer={isOnlyAnswer}
          topic={item.topic}
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
    }, [isRead, isOnlyAnswer, dataList])}
  </MainLayout>
}

export default NetworkOne