import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const Main = () => {
  return <MainSelecrLayout>
    <NavLink to="/os/one">单选题</NavLink>
    <NavLink to="/os/two">简单题</NavLink>
    <NavLink to="/os/three">计算题</NavLink>
  </MainSelecrLayout>
}

export default Main