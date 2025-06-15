import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const Main = () => {
  return <MainSelecrLayout>
    <NavLink to="/english">英语</NavLink>
    <NavLink to="/web">网站设计与开发</NavLink>
    <NavLink to="/computer_network">计算机网络</NavLink>
    <NavLink to="/os">操作系统</NavLink>
  </MainSelecrLayout>
}


export default Main;