import { MainLayout, randomArray, TipButton, QItem, QItemProps } from "shkfdx-ui"
import data1 from "./data/1.json"
import data2 from "./data/2.json"
import data3 from "./data/3.json"
import data4 from "./data/4.json"
import data5 from "./data/5.json"
import data6 from "./data/6.json"
import data7 from "./data/7.json"
import data8 from "./data/8.json"
import data9 from "./data/9.json"
import data10 from "./data/10.json"
import data11 from "./data/11.json"
import data13 from "./data/13.json"
import data14 from "./data/14.json"
import data15 from "./data/15.json"
import data16 from "./data/16.json"
import { Divider } from "antd"
import { useProxyStore } from "@carefrees/valtio"


const crateSpanList = () => [
  { type: "data1", title: "网页制作基础知识", dataList: randomArray(data1) },
  { type: "data2", title: "认识dreamweaver", dataList: randomArray(data2) },
  { type: "data3", title: "用dreamweaver创建本地站点", dataList: randomArray(data3) },
  { type: "data4", title: "制作简单网页", dataList: randomArray(data4) },
  { type: "data5", title: "超链接", dataList: randomArray(data5) },
  { type: "data6", title: "网页中使用图像", dataList: randomArray(data6) },
  { type: "data7", title: "表格的使用", dataList: randomArray(data7) },
  { type: "data8", title: "网页布局设计", dataList: randomArray(data8) },
  { type: "data9", title: "创建和使用框架", dataList: randomArray(data9) },
  { type: "data10", title: "制作表单网页", dataList: randomArray(data10) },
  { type: "data11", title: "网页动态特效", dataList: randomArray(data11) },
  { type: "data13", title: "网页中使用多媒体", dataList: randomArray(data13) },
  { type: "data14", title: "层的使用", dataList: randomArray(data14) },
  { type: "data15", title: "CSS样式表", dataList: randomArray(data15) },
  { type: "data16", title: "数据访问", dataList: randomArray(data16) },
]

const WebOne = () => {
  const { state, dispatch } = useProxyStore({
    dataList: crateSpanList(),
    isRead: false,
  })
  const dataList = state.dataList as unknown as { type: string, title: string, dataList: (QItemProps & { id: string })[] }[]
  const isRead = state.isRead

  return <MainLayout>
    <TipButton
      items={[
        {
          onClick: () => {
            dispatch({ isRead: !isRead })
          },
          children: isRead ? "答题模式" : "背题模式"
        },
        {
          onClick: () => {
            dispatch({ dataList: crateSpanList(), })
          },
          children: "刷新顺序"
        }
      ]}
    />
    {dataList.map((item, index) => {
      const { dataList, title } = item
      return <div>
        <Divider>{index + 1}. {title}</Divider>
        {dataList.map((item, index) => {
          return <QItem
            key={item.id}
            isRead={isRead}
            topic={item.topic}
            options={randomArray(item.options || [])}
            sort={index + 1}
          />
        })}
      </div>
    })}
  </MainLayout>
}

export default WebOne