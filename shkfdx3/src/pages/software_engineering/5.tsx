import { MainLayout, randomArray, TipButton, QItem, QReadingContent, QReadingContentItem, Split, } from "shkfdx-ui"
import data from "./data/5.json"
import { useProxyStore } from "@carefrees/valtio"

import img11 from "./assets/5/1.1.png"
import img12 from "./assets/5/1.2.png"
import img21 from "./assets/5/2.1.png"
import img22 from "./assets/5/2.2.png"

import img3 from "./assets/5/3.png"
import img4 from "./assets/5/4.png"
import img5 from "./assets/5/5.png"
import img6 from "./assets/5/6.png"

import img71 from "./assets/5/7.1.png"
import img72 from "./assets/5/7.2.png"

import img81 from "./assets/5/8.1.png"
import img82 from "./assets/5/8.2.png"

import img9 from "./assets/5/9.png"
import img91 from "./assets/5/9.1.png"


const EnglishFour = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as ({
    id: string,
    form?: string,
    contents: QReadingContentItem[],
    options?: { topic: string[], answer: string }[]
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
      if (Array.isArray(item.options) && item.options.length) {
        const _options = item.options
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
              case "7":
                if (childIndex === 0) {
                  answer = <img width={200} src={img71} style={{ maxWidth: '100%' }} alt="" />
                } else {
                  answer = <img width={200} src={img72} style={{ maxWidth: '100%' }} alt="" />
                }
                break
              case "8":
                if (childIndex === 0) {
                  answer = <img width={200} src={img81} style={{ maxWidth: '100%' }} alt="" />
                } else {
                  answer = <img width={200} src={img82} style={{ maxWidth: '100%' }} alt="" />
                }
                break
              default:
                break
            }
            return <QItem
              key={`${childIndex}_${item.id}_${index}`}
              // answer={option.answer}
              answerNode={answer}
              isOnlyAnswer={isOnlyAnswer}
              isRead={isRead}
              topic={option.topic}
              sort={childIndex + 1}
            />
          })}
        </Split>
      }
      let answer = undefined;
      switch (item.id) {
        case "3":
          answer = <img src={img3} width={200} style={{ maxWidth: '100%' }} alt="" />
          break
        case "4":
          answer = <img src={img4} width={200} style={{ maxWidth: '100%' }} alt="" />
          break
        case "5":
          answer = <img src={img5} width={200} style={{ maxWidth: '100%' }} alt="" />
          break
        case "6":
          answer = <img src={img6} width={200} style={{ maxWidth: '100%' }} alt="" />
          break
        case "9":
          answer = [
            <img key='9' src={img9} width={200} style={{ maxWidth: '100%' }} alt="" />,
            <img key='9.1' src={img91} width={200} style={{ maxWidth: '100%' }} alt="" />,
          ]
          break
        default:
          break
      }

      return <Split key={item.id}>
        <QReadingContent
          contents={item.contents}
          sort={index + 1}
          form={item.form}
        />
        <QItem
          key={`${item.id}_${index}`}
          answerNode={answer}
          isOnlyAnswer={isOnlyAnswer}
          isRead={isRead}
          sort={index + 1}
        />
      </Split>
    })}
  </MainLayout>
}

export default EnglishFour