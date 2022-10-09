import { AiOutlineBulb, AiFillGithub, AiOutlineLogout } from 'react-icons/ai';
import { RiTShirt2Line } from 'react-icons/ri';
import { UserInfo } from 'src/store/user';
import cx from 'classnames';
import styles from './index.module.scss';
interface IProps {
  content?: string,
  user: UserInfo
}

export default function ToolPanel(props: IProps) {
  let iconArray = [{icon: <AiOutlineBulb></AiOutlineBulb>,  title: '消息'}, {icon: <RiTShirt2Line></RiTShirt2Line>,  title: '换肤'}, {icon: <AiFillGithub key="AiFillGithub"></AiFillGithub>,  title: '仓库链接'}, {icon: <AiOutlineLogout></AiOutlineLogout>,  title: '登出'}]
  return (
    <div className={cx([styles.wrap, "flex", "flex-col", "justify-between", "bg-blue", "dark:bg-blue"])}>
        <img src="" alt="" />
        <div>{props.user.username}</div>
        <div className={cx([ "flex", "flex-col"])}>
            {iconArray.map((item, index) => {
                return <div className={cx(styles["icon-item"])} key={item.title}>{item.icon}</div>
            })}
        </div>
    </div>
  )
}
