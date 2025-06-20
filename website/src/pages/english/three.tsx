import { MainLayout, randomArray, TipButton, QItem, QReadingContent, QReadingContentItem, Split, QItemTranslate } from "shkfdx-ui"
import data from "./data/three.json"
import { useProxyStore } from "@carefrees/valtio"

const EnglishThree = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: false, isShowTranslate: true, isOnlyAnswer: true })

  const dataList = state.dataList as unknown as ({
    id: string,
    form?: string,
    contents: QReadingContentItem[],
    translate: string[],
    options?: { topic: string[], answer: string }[]
  })[]
  const isRead = state.isRead
  const isShowTranslate = state.isShowTranslate
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
            dispatch({ isShowTranslate: !isShowTranslate })
          },
          children: isShowTranslate ? "隐藏翻译" : "显示翻译"
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
      const { options = [] } = item
      return <Split key={item.id}>
        <QReadingContent
          contents={item.contents}
          form={item.form}
          sort={index + 1}
        />
        <QItemTranslate
          isShowTranslate={isShowTranslate}
          isRead={isRead}
          translate={item.translate}
        />
        <br />
        {options.map((option, childIndex) => <QItem
          isBool
          isOnlyAnswer={isOnlyAnswer}
          answer={option.answer}
          topic={option.topic}
          key={`${childIndex}_${item.id}`}
          isRead={isRead}
          sort={childIndex + 1}
        />)}
      </Split>
    })}
  </MainLayout>
}

export default EnglishThree