import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data from "./data/3.json"
import { useProxyStore } from "@carefrees/valtio"
import png28 from "./assets/2-8.png"
import png29 from "./assets/2-9.png"

const imgs = {
  8: png28,
  9: png29
}

const NetworkOne = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: false, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as (QItemProps & { id: string | number })[]
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
      let child = undefined
      if (item.id === 8 || item.id === 9) {
        child = <img width={200} src={imgs[item.id]} />
      }
      return <QItem
        key={item.id}
        isRead={isRead}
        isOnlyAnswer={isOnlyAnswer}
        topic={item.topic}
        options={randomArray(item.options || [])}
        sort={index + 1}
      >{child}</QItem>
    })}
  </MainLayout>
}

export default NetworkOne