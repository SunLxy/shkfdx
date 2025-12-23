import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import { useProxyStore } from "@carefrees/valtio"

import data7 from "../data/7/4.json"
import data8 from "../data/8/4.json"
import data10 from "../data/10/4.json"
import data12 from "../data/comprehensive/4.json"

const sumList = [...data7, ...data8, ...data10, ...data12].map((it, index) => ({ ...it, id: index + 1 }))


const OSTwo = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(sumList), isRead: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer

  return <MainLayout
    title="填空题 合集（含综合试题）"
  >
    <TipButton
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
    {dataList.map((item, index) => {
      return <QItem
        key={item.id}
        answer={item.answer}
        isOnlyAnswer={isOnlyAnswer}
        isTextArea
        isRead={isRead}
        topic={item.topic}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default OSTwo