import ToolPanel from "./ToolPanel"
import Informationlist from "../../components/InformationList/Informationlist"
import ChatBox from './index'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import cx from 'classnames';
interface InformationType {
  avatar: string,
  name: string,
  content: string,
  isAc: boolean
}
export default function Layout() {
  const user = useSelector((state: any) => state.user.userInfo)
  const theme = useSelector((state: any) => state.theme.theme);
  const [title, setTitle] = useState("");
  let onChooseHandler = (item: InformationType) => {
    setTitle(item.name)
  }
  return (
    <div className={cx("flex", "items-center", "justify-center", "h-screen", theme)}>
      <div className="flex w-10/12 border border-gray-100 h-80v">
        <ToolPanel user={user}></ToolPanel>
        <Informationlist onChoose={onChooseHandler}></Informationlist>
        <ChatBox title={title}></ChatBox> 
      </div>
    </div>
  )
}
