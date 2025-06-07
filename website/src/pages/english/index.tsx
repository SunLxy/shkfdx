import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const EnglishMain = () => {
  return <MainSelecrLayout>
    <NavLink to="/english/other">找出不同类别的词语</NavLink>
    <NavLink to="/english/one">词汇语法</NavLink>
    <NavLink to="/english/two">完形填空</NavLink>
    <NavLink to="/english/three">阅读判断题</NavLink>
    <NavLink to="/english/four">阅读选择题</NavLink>
    <NavLink to="/english/five">句子翻译选择题</NavLink>
  </MainSelecrLayout>
}

export default EnglishMain