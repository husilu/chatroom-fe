import ToolPanel from "./ToolPanel"
import Informationlist from "./Informationlist"
import ChatBox from './index'
import { useSelector } from 'react-redux'
import cx from 'classnames';
export default function Layout() {
  const user = useSelector((state: any) => state.user.userInfo)
  const theme = localStorage.getItem('theme') || "default";
  if (theme !== 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  return (
    <div className={cx("flex", "items-center", "justify-center", "h-screen", "bg-blue-300")}>    
      <div className="flex w-10/12 border border-gray-100">
        <ToolPanel user={user}></ToolPanel>
        <Informationlist></Informationlist>
        <ChatBox></ChatBox> 
      </div>
    </div>
  )
}
