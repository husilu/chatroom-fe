import { AiOutlineBulb, AiFillGithub, AiOutlineLogout } from "react-icons/ai";
import { RiTShirt2Line } from "react-icons/ri";
import { UserInfo } from "src/store/user";
import cx from "classnames";
import styles from "./index.module.scss";
import React, { useState, useEffect } from "react";
import Modal from "src/components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/theme";
interface IProps {
  content?: string;
  user: UserInfo;
}

export default function ToolPanel(props: IProps) {
  const dispatch = useDispatch();
  let theme = useSelector((state: any) => state.theme.theme);
  const [Modaltext, setModaltext] = useState(<></>); // 弹窗内容
  const [ModalVisible, setModalVisible] = useState(false); // 是否显示弹窗
  let iconArray = [
    { icon: <AiOutlineBulb></AiOutlineBulb>, title: "消息" },
    {
      icon: <RiTShirt2Line onClick={changeThemeModal}></RiTShirt2Line>,
      title: "换肤",
    },
    {
      icon: <AiFillGithub key="AiFillGithub"></AiFillGithub>,
      title: "仓库链接",
      link: "https://github.com/husilu/chatroom-fe",
    },
    { icon: <AiOutlineLogout></AiOutlineLogout>, title: "登出" },
  ];
  let themes = [
    { name: "粉色1", className: "theme-pink1" },
    { name: "粉色2", className: "theme-pink2" },
    { name: "粉色3", className: "theme-pink3" },
  ];
  useEffect(() => {
    generator_color_modal();
  }, [theme]);
  function generator_color_modal() {
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
  }
  function changeThemeModal() {
    generator_color_modal();
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
