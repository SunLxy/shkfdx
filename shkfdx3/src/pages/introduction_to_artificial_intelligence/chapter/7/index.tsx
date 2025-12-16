import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const DataScienceMain = () => {
  return <MainSelecrLayout
    title={<div>第七章</div>}
  >
    <NavLink to="/introduction_to_artificial_intelligence/7/1">单选</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/7/2">多选</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/7/3">判断</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/7/4">填空</NavLink>
  </MainSelecrLayout>
}

export default DataScienceMain
