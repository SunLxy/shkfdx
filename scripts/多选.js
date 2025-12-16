const fs = require("fs")

const code = `
1. 游戏人工智能的定性技术特点包括：
A. 行为可预测
B. 支持机器学习
C. 易于调试
D. 增加游戏挑战性

E. 依赖神经网络
答案：A, C
2. 以下哪些属于非定性技术？
A. 遗传算法
B. 模糊逻辑
C. 有限状态机
D. 神经网络
E. 路径搜索
答案：A, B, D
3. “群聚行为”的规则包括：
A. 聚合
B. 对齐
C. 分离
D. 随机移动
E. 路径规划
答案：A, B, C
4. 游戏角色“追踪与躲避”的实现依赖：
A. 传感器检测障碍
B. 路径搜索算法
C. 预定义行为规则
D. 神经网络训练
E. 语音信号处理
答案：A, B, C
5. “遗传算法”在游戏设计中的应用场景包括：
A. 优化路径适应度
B. 控制角色情感
C. 生成随机地形
D. 设计武器伤害值
E. 语音特征提取
答案：A, C
6. 有限状态机的局限性包括：
A. 状态复杂度高时难以管理
B. 无法模拟简单行为
C. 不支持实时计算
D. 依赖大规模语料库
E. 仅适用于静态场景
答案：A
7. “模糊逻辑”在游戏中的典型应用包括：
A. 威胁评估
B. 路径搜索
C. 角色情感模拟
D. 语音识别

E. 物理碰撞检测
答案：A, C
8. 游戏开发工具分为哪两类？
A. 创作工具类
B. 编程语言类
C. 硬件设备类
D. 图像渲染类
E. 物理引擎类
答案：A, B
9. “扫雷机智能游戏”的实现依赖：
A. 神经网络
B. 遗传算法
C. 有限状态机
D. 路径搜索
E. 语音识别
答案：A, B
10. 游戏AI的现状限制包括：
A. 实时性要求限制计算量
B. 角色行为过于完美
C. 无法模拟生物群体
D. 依赖专家系统
E. 图形渲染速度不足
答案：A, B
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
  if (/^[0-9]{1,3}\./.test(element)) {
    rowItem = {
      id: ++count,
      topic: [element.replace(/^[0-9]{1,3}\./, '').trim()],
      options: []
    }
    saveList.push(rowItem)
  } else {
    if (/^[A-Z]\./.test(element)) {
      rowItem.options.push({ label: element.replace(/^[A-Z]\./, '').trim() })
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
