import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data from "./data/4.json"
import { useProxyStore } from "@carefrees/valtio"

const OSTwo = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as (QItemProps & { id: string })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer

  return <MainLayout>
    <div style={{ color: "red", fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
      <div>
        公共大数据答案：
      </div>
      <div>
        大数据是海量、高增长率和多样化的信息资产。其具有海量性、多样性、高速性等特征，要求我们具备整体、相关等大数据思维。
      </div>
    </div>
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
        answer={item.answer}
        isOnlyAnswer={isOnlyAnswer}
        isTextArea
        isRead={isRead}
        answerNode={<div style={{ color: "red", fontWeight: "bold" }}>{item.answerNode}</div>}
        topic={item.topic}
        sort={index + 1}
      />
    })}
  </MainLayout>
}

export default OSTwo