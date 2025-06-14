import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const Main = () => {
  return <MainSelecrLayout>
    <NavLink to="/english">英语</NavLink>
    <NavLink to="/web">网站设计与开发</NavLink>
  </MainSelecrLayout>
}


export default Main;