import { MainLayout, randomArray, TipButton, QItem, QReadingContent, QReadingContentItem, Split, } from "shkfdx-ui"
import data from "./data/4.json"
import { useProxyStore } from "@carefrees/valtio"

const EnglishFour = () => {
  const { state, dispatch } = useProxyStore({ dataList: randomArray(data), isRead: true, isOnlyAnswer: true })
  const dataList = state.dataList as unknown as ({
    id: string,
    form: string,
    contents: QReadingContentItem[],
    options?: { topic: string[], answer: string, isTextArea?: boolean }[]
  })[]
  const isRead = state.isRead
  const isOnlyAnswer = state.isOnlyAnswer

  return <MainLayout>
    <div style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
      部分题目开放性的，答案不唯一
      <div>
        <div>数据库关系模式范式</div>
        <div>1NF (第一范式)：要求表中的每个属性（列）都是不可再分的原子值，不允许在列中出现重复的组或多值。</div>
        <div>2NF (第二范式)：在 1NF 的基础上，要求所有非主属性（非码属性）都完全函数依赖于主码，而不是部分依赖于主码。</div>
        <div>3NF (第三范式)：在 2NF 的基础上，要求不存在非主属性对主码的传递依赖，即非主属性不能依赖于其他非主属性。</div>
        <div>其他的范式：4NF、5NF、BCNF 等，用于处理更复杂的关系模式。</div>
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
      const { options = [] } = item
      const _options = randomArray(options)
      return <Split key={item.id}>
        <QReadingContent
          contents={item.contents || []}
          sort={index + 1}
          form={item.form}
        />
        <br />
        {_options.map((option, childIndex) => <QItem
          key={`${childIndex}_${item.id}_${index}`}
          answer={option.answer}
          isOnlyAnswer={isOnlyAnswer}
          isTextArea
          isRead={isRead}
          topic={option.topic}
          sort={childIndex + 1}
        />)}
      </Split>
    })}
  </MainLayout>
}

export default EnglishFour