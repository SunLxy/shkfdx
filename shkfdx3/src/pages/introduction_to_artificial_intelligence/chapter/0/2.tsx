import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import { ref, useProxyStore } from "@carefrees/valtio"
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
import { Button, Select } from "antd"
import { useMemo } from "react"
import { useLocation } from "react-router"

const sumList = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8, ...data9, ...data10, ...data11].map((it, index) => ({ ...it, id: index + 1 }))

const NetworkOne = () => {

  const location = useLocation()

  const { state, dispatch, proxyInstance } = useProxyStore({
    dataList: randomArray(sumList), isRead: true, isOnlyAnswer: true, errorList: [],
    options: JSON.parse(localStorage.getItem(`${location.pathname}_options`) || '[]'),
    isStart: false,
    count: Number(localStorage.getItem(`${location.pathname}_count`) || '0')
  })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer
  const count = state.count
  const isStart = state.isStart

  const items = useMemo(() => {
    const list = []
    for (let index = 0; index < count; index++) {
      list.push({ label: `第${index + 1}轮 - 失败数据`, value: `${index + 1}_errorList` })
      list.push({ label: `第${index + 1}轮 - 成功数据`, value: `${index + 1}_successList` })
    }
    return list
  }, [isStart])

  return <MainLayout
    // title="多选题 合集（不含综合试题）"
    title={
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        多选题 合集（不含综合试题）
        <span>{`第${count}轮`}</span>
        <Select
          style={{ width: 200 }}
          placeholder="请选择"
          options={items}
          onChange={value => {
            if (value) {
              if (proxyInstance.store.isStart) {
                proxyInstance.store.isStart = false
              }
              const oldIds = JSON.parse(localStorage.getItem(`${location.pathname}_${value}`) || '[]') as string[]
              const list = sumList.filter((item: any) => oldIds.includes(item.id))
              dispatch({ dataList: ref(randomArray(list)) as any, })
            }
          }}
        />
        <Button
          type="link"
          onClick={() => {
            localStorage.clear();
            localStorage.setItem(`${location.pathname}_count`, '0')
            proxyInstance.store.count = 0
            proxyInstance.store.isStart = false
          }}
        >
          清理
        </Button>
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
          isMulti
          topic={item.topic}
          isOnlyAnswer={isOnlyAnswer}
          options={randomArray(item.options || [])}
          sort={index + 1}
          onError={() => {
            let count = Number(localStorage.getItem(`${location.pathname}_count`) || '0')
            if (proxyInstance.store.isStart === false) {
              count = count + 1
              localStorage.setItem(`${location.pathname}_count`, `${count}`)
              proxyInstance.store.count = count

            }
            proxyInstance.store.isStart = true
            const oldIds = JSON.parse(localStorage.getItem(`${location.pathname}_${count}_errorList`) || '[]') as string[]
            localStorage.setItem(`${location.pathname}_${count}_errorList`, JSON.stringify([...oldIds, item.id]))
          }}
          onSuccess={() => {
            let count = Number(localStorage.getItem(`${location.pathname}_count`) || '0')
            if (proxyInstance.store.isStart === false) {
              count = count + 1
              localStorage.setItem(`${location.pathname}_count`, `${count}`)
              proxyInstance.store.count = count
            }
            proxyInstance.store.isStart = true
            const oldIds = JSON.parse(localStorage.getItem(`${location.pathname}_${count}_successList`) || '[]') as string[]
            localStorage.setItem(`${location.pathname}_${count}_successList`, JSON.stringify([...oldIds, item.id]))
          }}
        />
      })
    }, [dataList, isRead, isOnlyAnswer])}
  </MainLayout>
}

export default NetworkOne