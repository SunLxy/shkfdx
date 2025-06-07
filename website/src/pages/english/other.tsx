
import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import { useProxyStore } from "@carefrees/valtio"

const data = [
  {
    "id": 1,
    options: [
      { label: "noisy", },
      { label: "dirty" },
      { label: "beautiful", "isTrue": true },
      { label: "crowded" },
    ],
  },
  {
    "id": 2,
    options: [
      { label: "bicycle", },
      { label: "train" },
      { label: "pencil", "isTrue": true },
      { label: "car" },
    ],
  },
  {
    "id": 3,
    options: [
      { label: "guitar", "isTrue": true },
      { label: "river" },
      { label: "forest" },
      { label: "mountain" },
    ],
  },
  {
    "id": 4,
    options: [
      { label: "breakfast", },
      { label: "sofa", "isTrue": true },
      { label: "dinner" },
      { label: "lunch" },
    ],
  },
  {
    "id": 5,
    options: [
      { label: "piano", "isTrue": true },
      { label: "giraffe" },
      { label: "lion" },
      { label: "elephant " },
    ]
  },
]

const Other = () => {
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
        }
      ]}
    />
    {dataList.map((item, childIndex) => <QItem
      isOptions
      key={`${childIndex}_${item.id}`}
      isRead={isRead}
      options={randomArray(item.options || [])}
      sort={childIndex + 1}
    />)}
  </MainLayout>
}
export default Other