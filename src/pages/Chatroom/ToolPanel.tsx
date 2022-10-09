import { AiOutlineBulb, AiFillGithub, AiOutlineLogout } from 'react-icons/ai';
import { RiTShirt2Line } from 'react-icons/ri';
import { UserInfo } from 'src/store/user';
import cx from 'classnames';
import styles from './index.css';
interface IProps {
  content?: string,
  user: UserInfo
}

export default function ToolPanel(props: IProps) {
console.log("styles.wrap", styles.wrap)
  let iconArray = [{icon: <AiOutlineBulb key="AiOutlineBulb"></AiOutlineBulb>,  title: '消息'}, {icon: <RiTShirt2Line key="RiTShirt2Line"></RiTShirt2Line>,  title: '换肤'}, {icon: <AiFillGithub key="AiFillGithub"></AiFillGithub>,  title: '仓库链接'}, {icon: <AiOutlineLogout key="AiOutlineLogout"></AiOutlineLogout>,  title: '登出'}]
  return (
    // 
    <div className={cx([styles.wrap, "w-1/6", "flex", "flex-col", "justify-between", "bg-sky-300"])}>
        <img src="" alt="" />
        <div>{props.user.username}</div>
        <div className="flex flex-col">
            {iconArray.map((item, index) => {
                return item.icon
            })}
        </div>
    </div>
  )
}
