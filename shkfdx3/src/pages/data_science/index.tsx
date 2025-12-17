import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const DataScienceMain = () => {
  return <MainSelecrLayout
    title={<div>数据科学</div>}
  >
    <NavLink to="/data_science/1">单选</NavLink>
    <NavLink to="/data_science/2">判断</NavLink>
    <NavLink to="/data_science/3">简答</NavLink>
    <NavLink to="/data_science/4">论述</NavLink>
  </MainSelecrLayout>
}

export default DataScienceMain
