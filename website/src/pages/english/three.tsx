import { MainLayout, randomArray, TipButton, QItem, QReadingContent, QReadingContentItem, Split } from "shkfdx-ui"
import data from "./data/three.json"
import { useProxyStore } from "@carefrees/valtio"

const EnglishThree = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: false })
  const dataList = state.dataList as unknown as ({
    id: string,
    form?: string,
    contents: QReadingContentItem[],
    options?: { topic: string[], answer: string }[]
  })[]
  const isRead = state.isRead

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
        }
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
        {options.map((option, childIndex) => <QItem
          isBool
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