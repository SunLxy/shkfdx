import { Button, message } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom"
import { MainSelecrLayout } from "shkfdx-ui"

const Main = () => {
  const [sort, setSort] = useState(localStorage.getItem("sort") === "true")

  return <MainSelecrLayout>
    <NavLink to="/data_science">数据科学</NavLink>
    <NavLink to="/database">数据库</NavLink>
    <NavLink to="/introduction_to_artificial_intelligence">人工智能</NavLink>
    <NavLink to="/software_engineering">软件工程</NavLink>
    <Button
      onClick={() => {
        localStorage.setItem("sort", "false")
        message.success("关闭乱序成功,刷新页面")
        console.log("关闭乱序")
        setSort(false)
        window.location.reload()
      }}
      type="primary"
    >{sort ? "关闭乱序" : "开启乱序"}</Button>
  </MainSelecrLayout>
}


export default Main;