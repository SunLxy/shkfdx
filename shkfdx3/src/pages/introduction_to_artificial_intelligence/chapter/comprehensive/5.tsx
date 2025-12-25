import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data from "../data/comprehensive/5.json"
import { useProxyStore } from "@carefrees/valtio"
import { Button } from "antd"
import { useSpeak } from "react-text-to-speech"
import { useMemo } from "react"



const OSTwo = () => {
  const { state, dispatch, proxyInstance } = useProxyStore({ dataList: randomArray(data), isRead: true, isOnlyAnswer: true, isInitSpeak: false })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer
  const isInitSpeak = state.isInitSpeak
  const { speak, speechStatus, stop, start } = useSpeak();

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
      <Button
        type="link"
        onClick={() => {
          if (speechStatus === 'stopped') {
            if (proxyInstance.store.isInitSpeak) {
              start()
            } else {
              const list = dataList.map((item, index) => `第${index + 1}题：${item.topic}\n答案：${item.answer}`)
              speak(list.join('\n'), { lang: "zh-CN" })
              dispatch({ isInitSpeak: true })
            }
          } else if (speechStatus === 'started') {
            stop()
          }
        }}>
        {isInitSpeak ? (speechStatus === 'stopped' ? '开始播报' : '关闭播报') : "初始化播报"}
      </Button>
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