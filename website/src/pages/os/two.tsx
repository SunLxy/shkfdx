import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data from "./data/two.json"
import { useProxyStore } from "@carefrees/valtio"

const OSTwo = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: false })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
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
        },
      ]}
    />
    {dataList.map((item, index) => {
      return <QItem
        key={item.id}
        answer={item.answer}
        isInput
        isRead={isRead}
        topic={item.topic}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default OSTwo