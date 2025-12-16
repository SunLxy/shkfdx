import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data from "../data/9/1.json"
import { useProxyStore } from "@carefrees/valtio"

const NetworkOne = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer

  return <MainLayout>
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
            dispatch({ dataList: randomArray(data) })
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
        isRead={isRead}
        isOnlyAnswer={isOnlyAnswer}
        topic={item.topic}
        options={randomArray(item.options || [])}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default NetworkOne