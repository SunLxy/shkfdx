const fs = require("fs")

const code = `
1. 自然语言处理中，“____”是构成单词发音的最小单元。
答案：音素
2. “____”系统是早期通过关键词匹配模拟心理对话的自然语言处理系统。
答案：ELIZA
3. 语音识别中，用于描述语音帧频谱内容的参数称为____。
答案：特征向量
4. “____”模型通过统计平行语料库构建翻译模型。
答案：统计机器翻译
5. 乔姆斯基的“____文法”属于2型文法。
答案：上下文无关
6. 语音信号预处理中，“____”用于确定语音的起点和终点。
答案：端点检测
7. “____”是一种基于编码-解码结构的神经机器翻译核心技术。
答案：Seq2Seq
分析：（或序列到序列）
8. 自然语言处理中，“____”分析研究外界环境对语言使用的影响。
答案：语用分析
9. “____”技术通过记录已有翻译结果辅助专业翻译工作。
答案：翻译记忆
10. “____”是语音识别中用于压缩数据的矢量量化技术。
答案：VQ
分析：（或矢量量化）
`

/**
 * 数据转换
*/
const list = code.split("\n").map((ite) => ite.trim()).filter(Boolean)

/**保存数据*/
const saveList = []

let count = 0

let rowItem = {
  "id": 0,
  "topic": [],
  "answer": ""
}

for (let index = 0; index < list.length; index++) {
  const element = list[index];
  // 如果开头是数值，则是标题
  if (/^[0-9]{1,3}\./.test(element)) {
    rowItem = {
      id: ++count,
      topic: [element.replace(/^[0-9]{1,3}\./, '').trim()],
      answer: ""
    }
    saveList.push(rowItem)
  } else {
    if (/^答案[：|:]/.test(element)) {
      const value = element.replace(/^答案[：|:]/, '').trim()
      rowItem.answer = value
    }
    if (/^分析[：|:]/.test(element)) {
      const value = element.replace(/^分析[：|:]/, '').trim()
      rowItem.analysis = value
    }
  }
}

fs.writeFileSync('填空题.json', JSON.stringify(saveList, null, 2), { encoding: "utf8", flag: "w+" })
