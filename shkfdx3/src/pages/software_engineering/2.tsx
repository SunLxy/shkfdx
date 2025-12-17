import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data from "./data/2.json"
import { useProxyStore } from "@carefrees/valtio"
import img3 from "./assets/2/3.png"
import img7 from "./assets/2/7.png"
import img29 from "./assets/2/29.png"
import img32 from "./assets/2/32.png"
import img39 from "./assets/2/39.png"
import img49 from "./assets/2/49.png"
import img52 from "./assets/2/52.png"
import img55 from "./assets/2/55.png"

const NetworkOne = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as (QItemProps & { id: number })[]
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
      const { topic = [], id } = item
      let img = null
      switch (id) {
        case 3:
          img = <img src={img3} style={{ maxWidth: '100%' }} alt="" />
          break
        case 7:
          img = <img src={img7} style={{ maxWidth: '100%' }} alt="" />
          break
        case 29:
          img = <img src={img29} style={{ maxWidth: '100%' }} alt="" />
          break
        case 32:
          img = <img src={img32} style={{ maxWidth: '100%' }} alt="" />
          break
        case 39:
          img = <img src={img39} style={{ maxWidth: '100%' }} alt="" />
          break
        case 49:
          img = <img src={img49} style={{ maxWidth: '100%' }} alt="" />
          break
        case 52:
          img = <img src={img52} style={{ maxWidth: '100%' }} alt="" />
          break
        case 55:
          img = <img src={img55} style={{ maxWidth: '100%' }} alt="" />
          break
        default:
          break
      }
      return <QItem
        key={item.id}
        isRead={isRead}
        isOnlyAnswer={isOnlyAnswer}
        topic={[...topic, img].filter(Boolean)}
        options={randomArray(item.options || [])}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default NetworkOne