import type { QItemProps } from "shkfdx-ui"
import { useSpeak } from "react-text-to-speech"
import { Button } from "antd"
import { Fragment } from "react/jsx-runtime"

export interface SpeakProps {
  dataList: (QItemProps & { id: string })[]
  isInitSpeak: boolean
  onUpdateIsInitSpeak: (isInitSpeak: boolean) => void
}

const SpeakButton = (props: SpeakProps) => {
  const { dataList, isInitSpeak, onUpdateIsInitSpeak } = props
  const { speak, speechStatus, stop, start } = useSpeak();
  return window?.speechSynthesis ? <Button
    type="link"
    onClick={() => {
      if (speechStatus === 'stopped') {
        if (isInitSpeak) {
          start()
        } else {
          const list = dataList.map((item, index) => [
            `第${index + 1}题：${item.topic}\n答案：${item.answer}`,
            `第${index + 1}题：${item.topic}\n答案：${item.answer}`,
            `第${index + 1}题：${item.topic}\n答案：${item.answer}`
          ].join('\n'))
          try {
            speak(list.join('\n'), {
              lang: "zh-CN",
              rate: 0.5,
            })
            onUpdateIsInitSpeak(true)
          } catch (error) {
            console.log('error', error)
          }
        }
      } else if (speechStatus === 'started') {
        stop()
      }
    }}>
    {isInitSpeak ? (speechStatus === 'stopped' ? '开始播报' : '关闭播报') : "初始化播报"}
  </Button> : <Fragment></Fragment>
}

export default SpeakButton