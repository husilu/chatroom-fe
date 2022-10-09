import ToolPanel from "./ToolPanel"
import Informationlist from "./Informationlist"
import ChatBox from './index'
export default function Layout() {
  return (
    <div className="flex items-center justify-center h-screen">    
      <div className="flex w-10/12">
        <ToolPanel></ToolPanel>
          <Informationlist></Informationlist>
        <ChatBox></ChatBox> 
      </div>
    </div>
  )
}
