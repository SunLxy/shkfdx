import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const WebMain = () => {
  return <MainSelecrLayout>
    <NavLink to="/web/one-1">网页制作基础知识</NavLink>
    <NavLink to="/web/one-2">认识dreamweaver</NavLink>
    <NavLink to="/web/one-3">用dreamweaver创建本地站点</NavLink>
    <NavLink to="/web/one-4">制作简单网页</NavLink>
    <NavLink to="/web/one-5">超链接</NavLink>
    <NavLink to="/web/one-6">网页中使用图像</NavLink>
    <NavLink to="/web/one-7">表格的使用</NavLink>
    <NavLink to="/web/one-8">网页布局设计</NavLink>
    <NavLink to="/web/one-9">创建和使用框架</NavLink>
    <NavLink to="/web/one-10">制作表单网页</NavLink>
    <NavLink to="/web/one-11">网页动态特效</NavLink>
    <NavLink to="/web/one-13">网页中使用多媒体</NavLink>
    <NavLink to="/web/one-14">层的使用</NavLink>
    <NavLink to="/web/one-15">CSS样式表</NavLink>
    <NavLink to="/web/one-16">数据访问</NavLink>
    <NavLink to="/web/two">判断题</NavLink>
    <NavLink to="/web/three">简答题</NavLink>
  </MainSelecrLayout>
}

export default WebMain