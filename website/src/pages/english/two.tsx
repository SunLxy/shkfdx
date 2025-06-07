import { MainLayout, randomArray, TipButton, QItem, QReadingContent, QReadingContentItem, QListRadioOptionItem } from "shkfdx-ui"
import data from "./data/two.json"
import { useProxyStore } from "@carefrees/valtio"

const EnglishTwo = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: false })
  const dataList = state.dataList as unknown as ({ id: string, form?: string, contents: QReadingContentItem[], options: QListRadioOptionItem[][] })[]
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
      return <div style={{ marginBottom: 40 }} key={item.id}>
        <QReadingContent
          contents={item.contents}
          form={item.form}
          sort={index + 1}
        />
        {options.map((option, childIndex) => <QItem
          isOptions
          key={`${childIndex}_${item.id}`}
          isRead={isRead}
          options={randomArray(option || [])}
          sort={childIndex + 1}
        />)}
      </div>
    })}
  </MainLayout>
}

export default EnglishTwo