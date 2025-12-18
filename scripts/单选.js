const fs = require("fs")

const code = `
1. 智能体的核心特性不包括以下哪项？
A. 自主性
B. 反应性
C. 静态性
D. 社会性
答案：C
2. BDI模型中，“D”代表的是：
A. 信念（Belief）
B. 期望（Desire）
C. 意图（Intention）
D. 决策（Decision）
答案：B
3. 多智能体系统中，通过“协助者”协调局部群体的结构是：
A. 网络结构
B. 联盟结构
C. 黑板结构
D. 分布式结构
答案：B

4. 以下哪种通信方式依赖共享黑板作为信息媒介？
A. 直接通信
B. 消息对话系统
C. 黑板系统
D. 合同网协议
答案：C
5. KQML语言的核心层是：
A. 内容层
B. 消息层
C. 通信层
D. 协议层
答案：B
6. 合同网协作方法中，发布任务通知书的角色是：
A. 工作者
B. 管理者
C. 协助者
D. 监控者
答案：B
7. 多智能体系统中，“活锁”指的是：
A. 多个Agent无法进行下一步动作
B. 多个Agent持续工作但无进展
C. Agent间资源冲突无法解决
D. 协商协议失效
答案：B
8. 市场机制协作方法的核心思想是：
A. 直接通信
B. 经济模型与资源分配
C. 集中规划
D. 共享知识库
答案：B
9. 慎思式Agent的主要缺点是：
A. 响应速度慢
B. 无法适应动态环境
C. 缺乏协作能力
D. 需要大量训练数据
答案：A
10. KIF语言的主要作用是：
A. 定义通信协议
B. 实现知识表示与共享
C. 分配任务
D. 优化网络结构
答案：B
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
    if (/^[A-D][\.|．|、]/.test(element)) {
      rowItem.options.push({ label: element.replace(/^[A-D][\.|．|、]/, '').trim() })
    }
    if (/^答案[：|:]/.test(element)) {
      const value = element.replace(/^答案[：|:]/, '').trim()
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
    }
  }
}

fs.writeFileSync('单选.json', JSON.stringify(saveList, null, 2), { encoding: "utf8", flag: "w+" })
