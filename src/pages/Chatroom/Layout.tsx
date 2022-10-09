import ToolPanel from "./ToolPanel"
import Informationlist from "./Informationlist"
import ChatBox from './index'
import { useSelector } from 'react-redux'
export default function Layout() {
  const user = useSelector((state: any) => state.user.userInfo)
  return (
    <div className="flex">
       <ToolPanel user={user}></ToolPanel>
        <Informationlist></Informationlist>
       <ChatBox></ChatBox> 
    </div>
  )
}
