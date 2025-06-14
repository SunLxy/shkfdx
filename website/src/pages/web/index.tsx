import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const WebMain = () => {
  return <MainSelecrLayout>
    <NavLink to="/web/one">单选题</NavLink>
    <NavLink to="/web/two">判断题</NavLink>
    <NavLink to="/web/three">简答题</NavLink>
  </MainSelecrLayout>
}

export default WebMain