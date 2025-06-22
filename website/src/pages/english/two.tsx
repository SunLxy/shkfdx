import { MainLayout, randomArray, TipButton, QItem, QReadingContent, QReadingContentItem, QListRadioOptionItem, Split, QItemTranslate } from "shkfdx-ui"
import data from "./data/two.json"
import { useProxyStore } from "@carefrees/valtio"

const EnglishTwo = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: true, isShowTranslate: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as ({ translate: string[], id: string, form?: string, contents: QReadingContentItem[], options: QListRadioOptionItem[][] })[]
  const isRead = state.isRead
  const isShowTranslate = state.isShowTranslate
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
          isOptions
          isOnlyAnswer={isOnlyAnswer}
          key={`${childIndex}_${item.id}`}
          isRead={isRead}
          options={randomArray(option || [])}
          sort={childIndex + 1}
        />)}
      </Split>
    })}
  </MainLayout>
}

export default EnglishTwo