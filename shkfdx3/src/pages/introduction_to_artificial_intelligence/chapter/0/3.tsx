import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import { useProxyStore } from "@carefrees/valtio"
import data1 from "../data/1/3.json"
import data2 from "../data/2/3.json"
import data3 from "../data/3/3.json"
import data4 from "../data/4/3.json"
import data5 from "../data/5/3.json"
import data6 from "../data/6/3.json"
import data7 from "../data/7/3.json"
import data8 from "../data/8/3.json"
import data10 from "../data/10/3.json"
import data11 from "../data/11/3.json"
const sumList = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8, ...data10, ...data11].map((it, index) => ({ ...it, id: index + 1 }))


const NetworkOneChecked = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(sumList), isRead: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer

  return <MainLayout
    title="判断题 合集（不含综合试题）"
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
        isRead={isRead}
        topic={item.topic}
        isBool
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default NetworkOneChecked