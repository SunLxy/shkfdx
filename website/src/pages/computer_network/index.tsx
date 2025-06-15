import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const Main = () => {
  return <MainSelecrLayout>
    <NavLink to="/computer_network/one">概述-单选题</NavLink>
    <NavLink to="/computer_network/one-checked">概述-判断题</NavLink>

    <NavLink to="/computer_network/two">物理层-单选题</NavLink>
    <NavLink to="/computer_network/two-checked">物理层-判断题</NavLink>

    <NavLink to="/computer_network/three">数据链路层-单选题</NavLink>
    <NavLink to="/computer_network/three-checked">数据链路层-判断题</NavLink>

    <NavLink to="/computer_network/four">网络层-单选题</NavLink>
    <NavLink to="/computer_network/four-checked">网络层-判断题</NavLink>

    <NavLink to="/computer_network/five">传输层-单选题</NavLink>
    <NavLink to="/computer_network/five-checked">传输层-判断题</NavLink>

    <NavLink to="/computer_network/six">网络应用-单选题</NavLink>
    <NavLink to="/computer_network/six-checked">网络应用-判断题</NavLink>

    <NavLink to="/computer_network/seven">网络安全-多选题</NavLink>

    {/* <NavLink to="/web/two">判断题</NavLink> */}
    {/* <NavLink to="/web/three">简答题</NavLink> */}
  </MainSelecrLayout>
}

export default Main