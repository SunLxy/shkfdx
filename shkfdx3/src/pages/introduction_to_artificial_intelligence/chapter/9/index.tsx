import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const DataScienceMain = () => {
  return <MainSelecrLayout
    title={<div>第九章</div>}
  >
    <NavLink to="/introduction_to_artificial_intelligence/9/1">单选</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/9/2">多选</NavLink>
  </MainSelecrLayout>
}

export default DataScienceMain
