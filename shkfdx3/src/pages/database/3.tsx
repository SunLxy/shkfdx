import { MainLayout, randomArray, TipButton, QItem, QReadingContent, QReadingContentItem, Split, } from "shkfdx-ui"
import data from "./data/3.json"
import { useProxyStore } from "@carefrees/valtio"

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
      const { options = [] } = item
      const _options = randomArray(options)
      return <Split key={item.id}>
        <QReadingContent
          contents={item.contents}
          sort={index + 1}
          form={item.form}
        />
        {_options.map((option, childIndex) => <QItem
          key={`${childIndex}_${item.id}_${index}`}
          answer={option.answer}
          isOnlyAnswer={isOnlyAnswer}
          isInput
          isRead={isRead}
          topic={option.topic}
          sort={childIndex + 1}
        />)}
      </Split>
    })}
  </MainLayout>
}

export default EnglishFour