import ToolPanel from "./ToolPanel"
import Informationlist from "./Informationlist"
import ChatBox from './index'
export default function Layout() {
  return (
    <div className="flex">
       <ToolPanel></ToolPanel>
        <Informationlist></Informationlist>
       <ChatBox></ChatBox> 
    </div>
  )
}
