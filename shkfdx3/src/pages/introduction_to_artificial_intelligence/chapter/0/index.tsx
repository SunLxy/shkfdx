import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const DataScienceMain = () => {
  return <MainSelecrLayout
    title={<div>章节数据合集（含综合试题）</div>}
  >
    <NavLink to="/introduction_to_artificial_intelligence/0/1">单选</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/0/2">多选</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/0/3">判断</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/0/4">填空</NavLink>
  </MainSelecrLayout>
}

export default DataScienceMain
