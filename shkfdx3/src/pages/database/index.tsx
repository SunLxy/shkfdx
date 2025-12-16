import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const DataScienceMain = () => {
  return <MainSelecrLayout
    title={<div>数据库原理</div>}
  >
    <NavLink to="/database/1">单选</NavLink>
    <NavLink to="/database/2">填空题</NavLink>
    <NavLink to="/database/3">综合应用题</NavLink>
    <NavLink to="/database/4">问答题</NavLink>
    <div><span style={{ color: "red" }}>设计题(无)</span></div>
  </MainSelecrLayout>
}

export default DataScienceMain
