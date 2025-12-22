
import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const Main = () => {

  return <MainSelecrLayout>
    <NavLink to="/data_science">数据科学</NavLink>
    <NavLink to="/database">数据库</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence">人工智能</NavLink>
    <NavLink to="/software_engineering">软件工程</NavLink>
  </MainSelecrLayout>
}


export default Main;