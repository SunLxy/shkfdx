import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const DataScienceMain = () => {
  return <MainSelecrLayout>
    <NavLink to="/introduction_to_artificial_intelligence/1">第一章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/2">第二章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/3">第三章</NavLink>
  </MainSelecrLayout>
}

export default DataScienceMain
