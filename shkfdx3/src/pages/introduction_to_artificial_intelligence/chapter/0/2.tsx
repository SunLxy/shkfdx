import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import { useProxyStore } from "@carefrees/valtio"
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

const sumList = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8, ...data9, ...data10, ...data11].map((it, index) => ({ ...it, id: index + 1 }))

const NetworkOne = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(sumList), isRead: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer

  return <MainLayout
    title="第八章 多选题"
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
        isRead={isRead}
        isMulti
        topic={item.topic}
        isOnlyAnswer={isOnlyAnswer}
        options={randomArray(item.options || [])}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default NetworkOne