import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data from "./data/three.json"
import { useProxyStore } from "@carefrees/valtio"

const WebThree = () => {
  const { state, dispatch } = useProxyStore({
    dataList: randomArray(data), isRead: false,
    isOnlyAnswer: true
  })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
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
            dispatch({ dataList: randomArray(data) })
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
        answer={item.answer}
        isTextArea
        isRead={isRead}
        topic={item.topic}
        isOnlyAnswer={isOnlyAnswer}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default WebThree