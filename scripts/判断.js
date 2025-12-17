const fs = require("fs")

const code = `
1. 确定性推理方法和不确定性推理方法的差异在于是否引入可信度因子。
2. 人工智能发展历程中，第一次热潮产生于20世纪60年代。
3. 在盲目的图搜索策略中，如果有解，那么深度优先搜索策略一定可以找到解。
4. 在盲目的图搜索策略中，如果有解，那么宽度优先搜索策略一定可以找到解。
5. 知识表示是对知识的描述，即用一组符号把知识编码成计算机可以接受的某种结构，其表 示方法是唯一的。
6. 在专家系统中，知识只能通过知识工程师输入获得。
7. 数据既是信息，新的信息可以带来新的收益。
8. 在演绎推理中，若P→Q，则可以推出Q→ P。
9. 在盲目的图搜索策略中，如果有解，那么宽度优先搜索策略一定可以找到解。
10. 神经元具有球形或椭球型的细胞形态。
11. 状态空间方法是以状态和算符为基础来表示和求解问题的知识表示方法
12. 由于的神经元的可塑性，突触的传递作用可以增强或者减弱，而机器学习的过程，也是神 经元之间连接强度的变化过程。
13. 神经网络的中各单元信号传递只能采用同步传送的方式。
14. 神经网络是一种显式的知识表示方法
15. 在BP神经网络中，层与层之间的连接，以及信息的传播都是双向的。
16. 为了看见事物，人类视觉皮层的神经元接受全局信息，并受到全局刺激的响应，并对图像 进行整体感知。
17. BP网络是多层前馈网络， Hopfield网络是全互联反馈网络 
18. 在游戏人工智能中，运用定性技术以提高软件的智能性与挑战性。
19. 在游戏人工智能中，常常运用定性技术以提高软件的智能性与挑战性。 
20. 近年来常用的短语统计机器翻译，是一种无监督训练。
21. 深度学习是一种特征学习方法，将原始数据经过线性模型转化为抽象表达。
22. 单层前馈网络中，如果有i个输入， j个输出，则连接权值W可以表示成一个i*j的矩阵
23. 演绎推理是由个别事物或现象推出一般性知识的过程，归纳推理是由一般性知识推理出个 别事实的过程 
24. 在游戏人工智能中，常常运用定性技术以提高软件的智能性与挑战性。
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
    if (/[T|F]/.test(element)) {
      if (element === 'F') {
        rowItem.answer = '错误'
      }
      if (element === 'T') {
        rowItem.answer = '正确'
      }
    }
    // if (/^答案[：|:]/.test(element)) {
    //   const value = element.replace(/^答案[：|:]/, '').trim()
    //   if (value === '错') {
    //     rowItem.answer = '错误'
    //   }
    //   if (value === '对') {
    //     rowItem.answer = '正确'
    //   }
    // }
    if (/^分析[：|:]/.test(element)) {
      const value = element.replace(/^分析[：|:]/, '').trim()
      rowItem.analysis = value
    }

  }
}

fs.writeFileSync('判断.json', JSON.stringify(saveList, null, 2), { encoding: "utf8", flag: "w+" })
