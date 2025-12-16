const fs = require("fs")

const code = `
1. 游戏人工智能的核心目标是：
A. 实现完全自主的智能体
B. 根据输入生成看似智能的输出
C. 提高图形渲染速度

D. 优化网络通信
答案：B
2. 以下哪种技术属于非定性游戏AI技术？
A. 有限状态机
B. 遗传算法
C. 预定义行为规则
D. 路径搜索
答案：B
3. A*算法在游戏AI中主要用于：
A. 语音信号处理
B. 路径搜索
C. 图像渲染
D. 角色情感模拟
答案：B
4. “有限状态机”的缺点是：
A. 无法模拟简单行为
B. 状态复杂度增加时难以管理
C. 仅适用于静态场景
D. 依赖大规模语料库
答案：B
5. 游戏中“群聚行为”的规则不包括：
A. 聚合
B. 对齐
C. 分离
D. 随机移动
答案：D
6. 遗传算法在游戏设计中常用于：
A. 优化路径适应度函数
B. 生成语音特征参数
C. 设计角色情感模型
D. 降低CPU计算量
答案：A
7. “模糊逻辑”在战争游戏中主要用于：
A. 路径搜索
B. 威胁评估
C. 语音识别
D. 图像压缩
答案：B
8. 游戏角色“追踪与躲避”属于哪种设计技术？
A. 预定义行为规则
B. 目标导向行为
C. 非定性技术

D. 有限状态机
答案：A
9. 以下哪种技术适合实时游戏中的复杂逻辑？
A. 一阶谓词逻辑
B. 神经网络
C. 情景演算
D. 专家系统
答案：B
10. “置信网络”在游戏AI中用于解决：
A. 路径规划
B. 概率推理与因果关系
C. 语音信号滤波
D. 角色动画设计
答案：B
11. “扫雷机智能游戏”的核心技术组合是：
A. 神经网络与遗传算法
B. 模糊逻辑与决策树
C. 专家系统与有限状态机
D. 路径搜索与A*算法
答案：A
12. 游戏引擎的核心功能不包括：
A. 计算碰撞检测
B. 控制游戏剧情
C. 优化图形渲染
D. 管理网络通信
答案：D
13. “反应行为规则”的特点是：
A. 依赖内部状态记忆
B. 仅响应当前环境刺激
C. 支持机器学习
D. 需要复杂逻辑推理
答案：B
14. “决策树”在游戏AI中的优势是：
A. 支持随机化行为
B. 易于转化为规则
C. 适用于实时计算
D. 无需人工设计
答案：B
15. “人工生命”技术常用于模拟：
A. 单一角色行为
B. 生物群体共性
C. 语音信号特征

D. 图像渲染效果
答案：B
16. 游戏开发工具“Virtools”属于：
A. 编程语言类
B. 创作工具类
C. 硬件设备
D. 物理引擎
答案：B
17. “非玩家角色（NPC）”的智能性表现在：
A. 完全自主决策
B. 预定义行为与学习结合
C. 仅依赖动画设计
D. 无需路径搜索
答案：B
18. “基于范例的推理”模拟的是：
A. 遗传进化过程
B. 历史相似经历参考
C. 神经网络训练
D. 模糊逻辑判断
答案：B
19. “路径搜索”中A*算法的限制是：
A. 无法找到最短路径
B. 计算量大影响实时性
C. 仅适用于简单地图
D. 依赖语音信号输入
答案：B
20. 游戏AI中“有限状态机”的节点表示：
A. 角色的物理位置
B. 角色的行为状态
C. 游戏场景复杂度
D. 玩家的输入指令
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
  if (/^[0-9]{1,3}\./.test(element)) {
    rowItem = {
      id: ++count,
      topic: [element.replace(/^[0-9]{1,3}\./, '').trim()],
      options: []
    }
    saveList.push(rowItem)
  } else {
    if (/^[A-D]\./.test(element)) {
      rowItem.options.push({ label: element.replace(/^[A-D]\./, '').trim() })
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
