import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const EnglishMain = () => {
  return <MainSelecrLayout>
    <NavLink to="/english/one">词汇语法</NavLink>
    {/* <NavLink to="/english/two">完形填空</NavLink> */}
    {/* <NavLink to="/english/three">阅读理解</NavLink> */}
    {/* <NavLink to="/english/five">句子翻译</NavLink> */}
  </MainSelecrLayout>
}

export default EnglishMain