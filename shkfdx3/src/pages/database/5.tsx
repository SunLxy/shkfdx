import { MainLayout, randomArray, TipButton, QItem, QReadingContent, QReadingContentItem, Split, } from "shkfdx-ui"
import data from "./data/5.json"
import { useProxyStore } from "@carefrees/valtio"

import img11 from "./assets/5/1.1.png"
import img12 from "./assets/5/1.2.png"
import img21 from "./assets/5/2.1.png"
import img22 from "./assets/5/2.2.png"

import img31 from "./assets/5/3.1.png"
import img32 from "./assets/5/3.2.png"
import img41 from "./assets/5/4.1.png"
import img42 from "./assets/5/4.2.png"
import img51 from "./assets/5/5.1.png"
import img52 from "./assets/5/5.2.png"


const EnglishFour = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as ({
    id: string,
    form?: string,
    contents: QReadingContentItem[],
    options: { topic: string[], answer: string }[]
  })[]
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
      const _options = randomArray(item.options)
      return <Split key={item.id}>
        <QReadingContent
          contents={item.contents}
          sort={index + 1}
          form={item.form}
        />
        {_options.map((option, childIndex) => {
          let answer = undefined;
          switch (item.id) {
            case "1":
              if (childIndex === 0) {
                answer = <img width={200} src={img11} style={{ maxWidth: '100%' }} alt="" />
              } else {
                answer = <img width={200} src={img12} style={{ maxWidth: '100%' }} alt="" />
              }
              break
            case "2":
              if (childIndex === 0) {
                answer = <img width={200} src={img21} style={{ maxWidth: '100%' }} alt="" />
              } else {
                answer = <img width={200} src={img22} style={{ maxWidth: '100%' }} alt="" />
              }
              break
            case "3":
              if (childIndex === 0) {
                answer = <img width={200} src={img31} style={{ maxWidth: '100%' }} alt="" />
              } else {
                answer = <img width={200} src={img32} style={{ maxWidth: '100%' }} alt="" />
              }
              break
            case "4":
              if (childIndex === 0) {
                answer = <img width={200} src={img41} style={{ maxWidth: '100%' }} alt="" />
              } else {
                answer = <img width={200} src={img42} style={{ maxWidth: '100%' }} alt="" />
              }
              break
            case "5":
              if (childIndex === 0) {
                answer = <img width={200} src={img51} style={{ maxWidth: '100%' }} alt="" />
              } else {
                answer = <img width={200} src={img52} style={{ maxWidth: '100%' }} alt="" />
              }
              break
            default:
              break
          }
          return <QItem
            key={`${childIndex}_${item.id}_${index}`}
            answerNode={answer}
            isOnlyAnswer={isOnlyAnswer}
            isRead={isRead}
            topic={option.topic}
            sort={childIndex + 1}
          />
        })}
      </Split>

    })}
  </MainLayout>
}

export default EnglishFour