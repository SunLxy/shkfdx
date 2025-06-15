import { MainLayout } from "shkfdx-ui"
import { Divider } from "antd"
import png1 from "./assets/1.png"
import png2 from "./assets/2.png"
import png3 from "./assets/3.png"
import png4 from "./assets/4.png"
import png5 from "./assets/5.png"
import png6 from "./assets/6.png"
const Main = () => {
  return <MainLayout>
    <Divider >第一题</Divider>
    <img src={png1} alt="" />
    <Divider >第二题</Divider>
    <img src={png2} alt="" />
    <Divider >第三题</Divider>
    <img src={png3} alt="" />
    <Divider >第四题</Divider>
    <img src={png4} alt="" />
    <Divider >第五题</Divider>
    <img src={png5} alt="" />
    <Divider>第六题</Divider>
    <img src={png6} alt="" />
  </MainLayout>
}
export default Main