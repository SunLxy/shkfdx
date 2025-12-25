import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import { useProxyStore } from "@carefrees/valtio"
import useSelectPractice from "@/components/select"
import data from "./data/3.json"

const NetworkOne = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer
  const { render, onError, onSuccess } = useSelectPractice({ sumList: data, dispatch })

  return <MainLayout
    title={
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        多选题
        {render}
      </div>
    }
  >
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
      return <QItem
        key={item.id}
        isRead={isRead}
        isMulti
        topic={item.topic}
        isOnlyAnswer={isOnlyAnswer}
        options={randomArray(item.options || [])}
        sort={index + 1}
        onError={() => onError(item as any)}
        onSuccess={() => onSuccess(item as any)}
      />
    })}
  </MainLayout>
}

export default NetworkOne