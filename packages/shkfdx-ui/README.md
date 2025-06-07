# 渲染题目的样式类型

1. 题目+选项
2. 阅读理解 + 选项
3. 题目 + 填空
4. 题目 + 简答

## 选择题格式

```json
{
  "sort":1,// 序号
  "topic":["题目内容"],
  "options":[ 
    {
      "label":"选项内容1",
      "isTrue":true
    },
    {
      "label":"选项内容2",
    },
    // ....
  ],
}
```

## 填空题格式

```json
{
  "sort":1,// 序号
  "topic":["题目内容"],
  "isInput":true,
  "answer":"答案....."
}
```

## 判断题格式

```json
{
  "sort":1,// 序号
  "topic":["题目内容"],
  "isBool":true,
  "answer":"正确/错误"
}
```

## 直接渲染选择项

```json
{
  "sort":1,// 序号
   "options":[ 
    {
      "label":"选项内容1",
      "isTrue":true
    },
    {
      "label":"选项内容2",
    },
    // ....
  ],
}
```
