import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const DataScienceMain = () => {
  return <MainSelecrLayout
    title={<div>第三章</div>}
  >
    <NavLink to="/introduction_to_artificial_intelligence/3/1">单选</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/3/2">多选</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/3/3">判断</NavLink>
  </MainSelecrLayout>
}

export default DataScienceMain
