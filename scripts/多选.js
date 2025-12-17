const fs = require("fs")

const code = `
1. 在专家系统中，包含以下哪些组成部分：（      ）
A、用户
B、推理机
C、知识库
D、综合数据库
E、数据处理库
2. 机器学习包括（    ）
A、监督学习
B、强化学习
C、非监督学习
D、群体学习
E、迁移学习
3. 人工智能利用计算机通过程序和算法实现了人类智能的哪些部分？（   ）
A、视觉部分
B、理性部分
C、可计算部分
D、人类智能的非理性部分
E、不可计算部分
4. 知识发现过程可以粗略地划分为以下哪些步骤（     ）
A、数据准备
B、数据挖掘
C、数据处理
D、结果解释
E、结果导出
5. 按照学习方式的不同，可以将机器学习分为以下几个类别：（      ）
A、聚类
B、无监督学习
C、监督学习
D、弱监督学习
E、强化学习
6. 在游戏人工智能中，用于实现游戏非定性行为的方法包括（      ）：
A、神经网络
B、有限状态机
C、贝叶斯技术
D、遗传算法
E、搜索技术
7. 人工智能发展的驱动力包括（       ）
A、大数据
B、传感网络
C、脑科学
D、智能芯片
E、超级计算
8. 在语音识别中， 一般采用的方法有：（    ）
A、模板匹配法
B、随机模型法
C、概率语法分析法
D、超采样法
E、神经网络法
9. 在语言处理的过程中，分为哪些层次？（        ）
A、语音分析
B、词法分析
C、句法分析
D、语用分析
E、语义分析
10. 认识智能的观点有（ ）
A、思维理论
B、知识阈值理论
C、进化理论
D、行为理论
E、反馈理论
11. 人工智能研究的领域包括（ ）
A、符号智能
B、计算智能
C、机器学习
D、机器感知
E、完全取代人类
12. 机器学习包括（ ）
A、监督学习
B、强化学习
C、非监督学习
D、群体学习
E、自主学习
13. 思维方式包含下列选项中的（       ）
A、抽象思维
B、逆向思维
C、形象思维
D、灵感思维
E、人工思维
14. 智能制造发展的特点包括（ ）
A、向智能化发展
B、实现高效绿色制造
C、生产过程透明化
D、生产现场无人化
E、运用网络通讯实现信息互通
15. 按推理的逻辑基础分类，推理分为（ ）
A、演绎推理
B、归纳推理
C、默认推理
D、双向推理
E、混合推理
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
  "options": []
}

for (let index = 0; index < list.length; index++) {
  const element = list[index];
  // 如果开头是数值，则是标题
  if (/^[0-9]{1,3}[\.|．|、]/.test(element)) {
    rowItem = {
      id: ++count,
      topic: [element.replace(/^[0-9]{1,3}[\.|．|、]/, '').trim()],
      options: []
    }
    saveList.push(rowItem)
  } else {
    if (/^[A-F][\.|．|、]/.test(element)) {
      rowItem.options.push({ label: element.replace(/^[A-F][\.|．|、]/, '').trim() })
    }
    if (/^答案[：|:]/.test(element)) {
      const answer = element.replace(/^答案[：|:]/, '').trim()
      const answerList = answer.split('').filter(it => /[A-Z]/.test(it))
      for (let index = 0; index < answerList.length; index++) {
        const value = answerList[index];
        if (value === 'A') {
          rowItem.options[0].isTrue = true
        }
        if (value === 'B') {
          rowItem.options[1].isTrue = true
        }
        if (value === 'C') {
          rowItem.options[2].isTrue = true
        }
        if (value === 'D') {
          rowItem.options[3].isTrue = true
        }
        if (value === 'E') {
          rowItem.options[4].isTrue = true
        }
        if (value === 'F') {
          rowItem.options[5].isTrue = true
        }
      }
    }
  }
}

fs.writeFileSync('多选.json', JSON.stringify(saveList, null, 2), { encoding: "utf8", flag: "w+" })
