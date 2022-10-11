import { AiOutlineBulb, AiFillGithub, AiOutlineLogout } from 'react-icons/ai';
import { RiTShirt2Line } from 'react-icons/ri';
import { UserInfo } from 'src/store/user';
import cx from 'classnames';
import styles from './index.module.scss';
import { useState } from 'react';
import Modal from 'src/components/Modal'
interface IProps {
  content?: string,
  user: UserInfo
}

export default function ToolPanel(props: IProps) {
  const [Modaltext, setModaltext] = useState(<></>); // 弹窗内容
  const [ModalVisible, setModalVisible] = useState(false); // 是否显示弹窗
  let iconArray = [{icon: <AiOutlineBulb></AiOutlineBulb>,  title: '消息'}, {icon: <RiTShirt2Line onClick={changeTheme}></RiTShirt2Line>,  title: '换肤'}, {icon: <AiFillGithub key="AiFillGithub"></AiFillGithub>,  title: '仓库链接'}, {icon: <AiOutlineLogout></AiOutlineLogout>,  title: '登出'}]
  let themes = [{name: "粉色1", className: "theme-pink1"}, {name: "粉色2", className: "theme-pink2"}, {name: "粉色3", className: "theme-pink3"}]
  function changeTheme() {
    
    let Modaltext =  <div className={styles.themewrap}>
        {themes.map(item => {
          return <div></div>
        })}
    </div>
    setModaltext(Modaltext)
    setModalVisible(true)
  }
  function onClose() {
    setModalVisible(false)
  }
  return (
    <div className={cx([styles.wrap, "flex", "flex-col", "justify-between", "bg-blue", "dark:bg-blue"])}>
        <img src="" alt="" />
        <div>{props.user.username}</div>
        <div className={cx([ "flex", "flex-col"])}>
            {iconArray.map((item, index) => {
                return <div className={cx(styles["icon-item"])} key={item.title}>{item.icon}</div>
            })}
        </div>
        <Modal style={{width: "200px"}} visible={ModalVisible} close={onClose}>{Modaltext}</Modal>
    </div>
  )
}
