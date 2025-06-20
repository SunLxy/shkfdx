import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"

import data5 from "./data/5.json"

import { useProxyStore } from "@carefrees/valtio"

const WebOne = () => {
  const { state, dispatch } = useProxyStore({
    dataList: randomArray(data5 || []),
    isRead: false,
    isOnlyAnswer: true
  })
  const dataList = state.dataList as unknown as (QItemProps & { id: string | number })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer
  return <MainLayout>
    <TipButton
      items={[
        {
          onClick: () => {
            dispatch({ isRead: !isRead })
          },
          children: isRead ? "答题模式" : "背题模式"
        },
        {
          onClick: () => {
            dispatch({ dataList: randomArray(data5 || []), })
          },
          children: "刷新顺序"
        },
        {
          onClick: () => {
            dispatch({ isOnlyAnswer: !isOnlyAnswer })
          },
          children: isOnlyAnswer ? "隐藏" : "显示"
        }
      ]}
    />
    {dataList.map((item, index) => {
      return <QItem
        key={item.id}
        isRead={isRead}
        isOnlyAnswer={isOnlyAnswer}
        topic={item.topic}
        options={randomArray(item.options || [])}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default WebOne