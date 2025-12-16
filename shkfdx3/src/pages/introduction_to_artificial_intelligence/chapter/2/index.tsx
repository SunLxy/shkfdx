import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const DataScienceMain = () => {
  return <MainSelecrLayout>
    <NavLink to="/introduction_to_artificial_intelligence/2/1">单选</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/2/2">多选</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/2/3">判断</NavLink>
  </MainSelecrLayout>
}

export default DataScienceMain
