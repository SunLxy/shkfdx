import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const DataScienceMain = () => {
  return <MainSelecrLayout
    title={<div>软件工程</div>}
  >
    <NavLink to="/software_engineering/1">判断</NavLink>
    <NavLink to="/software_engineering/2">单选</NavLink>
    <NavLink to="/software_engineering/3">多选</NavLink>
    <NavLink to="/software_engineering/4">填空</NavLink>
    <NavLink to="/software_engineering/5">综合</NavLink>
    <NavLink to="/software_engineering/6">问答</NavLink>
  </MainSelecrLayout>
}

export default DataScienceMain
