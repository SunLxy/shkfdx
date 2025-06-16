import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data13 from "./data/13.json"
import { useProxyStore } from "@carefrees/valtio"

const WebOne = () => {
  const { state, dispatch } = useProxyStore({
    dataList: randomArray(data13 || []),
    isRead: false,
  })
  const dataList = state.dataList as unknown as (QItemProps & { id: string | number })[]
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
            dispatch({ dataList: randomArray(data13 || []), })
          },
          children: "刷新顺序"
        }
      ]}
    />
    {dataList.map((item, index) => {
      return <QItem
        key={item.id}
        isRead={isRead}
        topic={item.topic}
        options={randomArray(item.options || [])}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default WebOne