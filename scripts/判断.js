const fs = require("fs")

const code = `
1. 非定性技术通过增加行为不可预测性提升游戏挑战性。
答案：对
2. 有限状态机适合处理高复杂度的状态转移问题。
答案：错
3. A*算法在无障碍物场景中无需使用。
答案：对
4. 模糊逻辑通过精确数学模型控制角色行为。
答案：错
5. “扫雷机智能游戏”完全依赖预定义行为规则。
答案：错
6. 遗传算法通过适应度函数优化路径选择。
答案：对
7. 游戏引擎仅负责图形渲染功能。
答案：错
8. “群聚行为”的规则包括分离以避免碰撞。
答案：对
9. 专家系统在复杂游戏中易于实现。
答案：错
10. 非玩家角色（NPC）的行为完全由玩家控制。
答案：错
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
      if (value === '错') {
        rowItem.answer = '错误'
      }
      if (value === '对') {
        rowItem.answer = '正确'
      }
    }
    if (/^分析[：|:]/.test(element)) {
      const value = element.replace(/^分析[：|:]/, '').trim()
      rowItem.analysis = value
    }

  }
}

fs.writeFileSync('判断.json', JSON.stringify(saveList, null, 2), { encoding: "utf8", flag: "w+" })
