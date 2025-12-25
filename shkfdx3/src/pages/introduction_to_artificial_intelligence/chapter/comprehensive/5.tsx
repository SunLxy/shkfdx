import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data from "../data/comprehensive/5.json"
import { useProxyStore } from "@carefrees/valtio"
import { useMemo } from "react"
import SpeakButton from "@/components/speak"

const OSTwo = () => {
  const { state, dispatch, } = useProxyStore({ dataList: randomArray(data), isRead: true, isOnlyAnswer: true, isInitSpeak: false })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer
  const isInitSpeak = state.isInitSpeak

  const text = useMemo(() => {
    return dataList.map((item, index) => {
      return <QItem
        key={item.id}
        answer={item.answer}
        isOnlyAnswer={isOnlyAnswer}
        isTextArea
        isRead={isRead}
        topic={item.topic}
        sort={index + 1}
      />
    })
  }, [dataList, isOnlyAnswer, isRead])

  return <MainLayout
    title={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      综合试题 简答题
      <SpeakButton dataList={dataList} isInitSpeak={isInitSpeak} onUpdateIsInitSpeak={(isInitSpeak) => dispatch({ isInitSpeak })} />
    </div>}
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
    {text}
  </MainLayout>
}

export default OSTwo