import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data from "./data/4.json"
import { useProxyStore } from "@carefrees/valtio"
import img6 from "./assets/4/6.png"
import img7 from "./assets/4/7.png"
import img8 from "./assets/4/8.png"
import img19 from "./assets/4/19.png"
import img32 from "./assets/4/32.png"
import img33 from "./assets/4/33.png"
import img36 from "./assets/4/36.png"
import img43 from "./assets/4/43.png"
import img49 from "./assets/4/49.png"


const OSTwo = () => {
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
        case 6:
          img = <img src={img6} style={{ maxWidth: '100%' }} alt="" />
          break
        case 7:
          img = <img src={img7} style={{ maxWidth: '100%' }} alt="" />
          break
        case 8:
          img = <img src={img8} style={{ maxWidth: '100%' }} alt="" />
          break
        case 19:
          img = <img src={img19} style={{ maxWidth: '100%' }} alt="" />
          break
        case 32:
          img = <img src={img32} style={{ maxWidth: '100%' }} alt="" />
          break
        case 33:
          img = <img src={img33} style={{ maxWidth: '100%' }} alt="" />
          break
        case 36:
          img = <img src={img36} style={{ maxWidth: '100%' }} alt="" />
          break
        case 43:
          img = <img src={img43} style={{ maxWidth: '100%' }} alt="" />
          break
        case 49:
          img = <img src={img49} style={{ maxWidth: '100%' }} alt="" />
          break
        default:
          break
      }
      return <QItem
        key={item.id}
        answer={item.answer}
        isOnlyAnswer={isOnlyAnswer}
        isTextArea
        isRead={isRead}
        topic={[...topic, img].filter(Boolean)}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default OSTwo