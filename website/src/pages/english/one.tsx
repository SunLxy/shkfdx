import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data from "./data/one.json"
import { useProxyStore } from "@carefrees/valtio"

const EnglishOne = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: false, isShowTranslate: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
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
      return <QItem
        isShowTranslate={isShowTranslate}
        key={item.id}
        translate={item.translate}
        isRead={isRead}
        topic={item.topic}
        isOnlyAnswer={isOnlyAnswer}
        options={randomArray(item.options || [])}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default EnglishOne