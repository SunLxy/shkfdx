import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const DataScienceMain = () => {
  return <MainSelecrLayout
    title={<div>人工智能</div>}
  >
    <NavLink to="/introduction_to_artificial_intelligence/1">第一章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/2">第二章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/3">第三章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/4">第四章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/5">第五章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/6">第六章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/7">第七章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/8">第八章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/9">第九章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/10">第十章</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence/11">第十一章</NavLink>
    <div>综合试题(单选)</div>
    <div>综合试题(多选)</div>
    <div>综合试题(判断)</div>
    <div>综合试题(填空)</div>
    <div>综合试题(简答)</div>
  </MainSelecrLayout>
}

export default DataScienceMain
