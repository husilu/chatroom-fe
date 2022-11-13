import { AiFillGithub, AiOutlineLogout } from "react-icons/ai";
import { TbBrandWindows } from "react-icons/tb";
import { RiTShirt2Line } from "react-icons/ri";
import { UserInfo } from "src/store/user";
import cx from "classnames";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import Modal from "src/components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/theme";
import {useNavigate} from 'react-router-dom'
interface IProps {
  content?: string;
  user: UserInfo;
}

export default function ToolPanel(props: IProps) {
  const dispatch = useDispatch();
  let theme = useSelector((state: any) => state.theme.theme);
  let user = useSelector((state:any) => state.user.userInfo);
  const [Modaltext, setModaltext] = useState(<></>); // 弹窗内容
  const [ModalVisible, setModalVisible] = useState(false); // 是否显示弹窗
  const navigate = useNavigate();
  let iconArray = [
    { icon: <TbBrandWindows onClick={personModal}></TbBrandWindows>, title: "个人信息" },
    {
      icon: <RiTShirt2Line onClick={changeThemeModal}></RiTShirt2Line>,
      title: "换肤",
    },
    {
      icon: <AiFillGithub key="AiFillGithub"></AiFillGithub>,
      title: "仓库链接",
      link: "https://github.com/husilu/chatroom-fe",
    },
    { icon: <AiOutlineLogout onClick={logoutModal}></AiOutlineLogout>, title: "登出" },
  ];
  let themes = [
    { name: "粉色1", className: "theme-pink1" },
    { name: "粉色2", className: "theme-pink2" },
    { name: "粉色3", className: "theme-pink3" },
  ];

  useEffect(() => {
    if (ModalVisible) {
      generator_color_modal();
    }
  }, [theme]);

  // 构造颜色弹窗
  const generator_color_modal = () => {
    setTimeout(() => {
      setModaltext(
        <div className="grid-cols-3">
          {themes.map((item) => {
            return (
              <div
                className={cx([
                  item.className,
                  styles.themesItem,
                  item.className === theme ? styles.active : "",
                ])}
                key={item.name}
                onClick={() => changeColor(item.className)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      );
    })
  }

  // 构造用户弹窗
  const generator_person_modal = () => {
    setTimeout(() => {
      setModaltext(
        <div>
          <img src="" alt="" />
          <input type="upload" />
          <p>昵称:{user.nickname}</p>
          <p>Email:{user.email}</p>
          <input type="text" />
          <button>提交</button>
        </div>
      );
    })
  }
  // 构造登出弹窗
  const generator_logout_modal = () => {
    setTimeout(() => {
      setModaltext(
        <div>
          <p>退出登录？</p>
          <button onClick={logoutHandler}>确认</button>
          <button>取消</button>
        </div>
      );
    })
  }

  function changeThemeModal() {
    generator_color_modal();
    setModaltext(Modaltext);
    setModalVisible(true);
  }

 function personModal() {
    generator_person_modal();
    setModaltext(Modaltext);
    setModalVisible(true);
  }

  function logoutHandler() {
    localStorage.removeItem('token');
    navigate('/login')
  }

  function logoutModal() {
    generator_logout_modal()
    setModaltext(Modaltext);
    setModalVisible(true);
  }

  function onClose() {
    setModalVisible(false);
  }

  function changeColor(color: string) {
    dispatch(changeTheme(color));
  }
  return (
    <div
      className={cx([
        styles.toolpwrap,
        "flex",
        "flex-col",
        "justify-between",
        "bg-blue",
        "dark:bg-blue",
      ])}
    >
      <img src="" alt="" />
      <div>{props.user.username}</div>
      <div className={cx(["flex", "flex-col"])}>
        {iconArray.map((item, index) => {
          return !item.link ? (
            <div className={cx(styles["icon-item"])} key={item.title}>
              {item.icon}
            </div>
          ) : (
            <a
              href={item.link}
              key={item.title}
              className={cx(styles["icon-item"])}
              target="_blank"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
      <Modal style={{ width: "200px" }} visible={ModalVisible} close={onClose}>
        {Modaltext}
      </Modal>
    </div>
  );
}
