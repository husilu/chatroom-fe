import { FC, useState } from "react";
import { AiOutlineSmile, AiOutlineSwapRight } from 'react-icons/ai';
import { BsFillPeopleFill, BsPersonFill } from 'react-icons/bs';
import React from 'react';
import cx from 'classnames'
import styles from './index.module.scss'
// 加入退出气泡
import Pop from '../../components/noticePop'
import EmojiPicker from 'emoji-picker-react';
import { Popover } from 'react-tiny-popover'
import { EmojiClickData } from 'emoji-picker-react'


// import userReducer from 'src/store'
interface IProps {
    content?: string,
    title: string
}
interface chatItem {
    content: string | React.ReactNode,
    type: number // 可改为枚举？  1 为聊天气泡  2 为提醒气泡
}

interface Props extends React.ComponentPropsWithoutRef<'div'> {
    onClick(): void;
}

interface IJoiner {
    name: string,
    avatar: string
}

enum roomType {
    publicChat,
    privateChat
}

const Chatroom: FC<IProps> = (props) => {
    
    // 聊天面板标题
    let { title } = props;
    // 消息内容
    const [text, setText] = useState("");
    // 消息数组
    const [chatList, setchatList] = useState<chatItem[]>([]);
    // 该聊天室用户列表
    const [userList, setuserList] = useState<IJoiner[]>([])
    // 当前在线人数
    const [onlineNum, setonlineNum] = useState(0)
    // 展示侧边栏
    const [showsidebar, setshowsidebar] = useState(false)
    // 侧边栏type 0:为群聊 1:为私聊
    const [bartype, setbartype] = useState<roomType>(0)
    // 展示emoji
    const [Emojivisible, setEmojivisible] = useState(false)
    // 聊天气泡
    function sendHandler(e: KeyboardEvent) {
        // 发送消息
        if (e.key === 'Enter') {
            chatList.push({
                content: text,
                type: 1
            })
            setchatList([...chatList])
            generator_pop();
            setText("")
        }
    }
    // 提醒气泡
    function generator_pop() {
        let text = "xxx join in"
        chatList.push({
            content: <div className={styles.noticepopwrap}>{text}</div>,
            type: 2
        })
        setchatList([...chatList])
    }
    function openSideBar() {
        setshowsidebar(true)
    }
    function closeSideBar() {
        setshowsidebar(false)
    }
    // 显示什么类型的侧边栏
    function chooseSideBar() {
        return <div className={cx([styles.userList, showsidebar ? styles.active : ""])}>
        <div className={styles.userlistHeader}>
            <AiOutlineSwapRight onClick={closeSideBar} className="cursor-pointer"></AiOutlineSwapRight>
        </div>
        {bartype === 0 ? <>
            <div className={styles.roomPeopleNum}>
            当前人数：{onlineNum}
            </div>
            <div className="px-3">
                {userList.map(item => {
                return <div className="flex">
                    <img src={item.avatar} alt="" />
                    <span>{item.name}</span>
                </div>
            })}
            </div>
        </> : <div>私聊板块</div>}
    </div>
    }
    function sideBarIcon() {
        return <>
            {bartype === 0 ? <BsFillPeopleFill></BsFillPeopleFill> : <BsPersonFill></BsPersonFill>}
        </>
    }
    // 把emoji放入聊天框
    function setEmoji(emojiData: EmojiClickData, event: MouseEvent) {
        setText(`${text}${emojiData.emoji}`)
    }
    const EmojiButton = React.forwardRef<HTMLDivElement, Props>((props, ref) => (
        <div ref={ref} onClick={props.onClick}><AiOutlineSmile className="text-sky-400 flex-auto flex justify-between items-center cursor-pointer"></AiOutlineSmile></div>
      ));
    return (
        <div className={cx(["w-full relative", styles.chatconwrap])}>
            {title ? <div className={cx([styles.header])}><div className={styles.headerTitle}>{title}</div><div className={cx([styles.peoplewrap])} onClick={openSideBar}>{sideBarIcon()}</div></div> : ""}
            <div className={cx(["grid grid-cols-4"])}>
                {/* 聊天面板头部 */}
                <div className="col-span-4 flex flex-col">
                    {/* <div className="border-b-2 border-stone-50"></div> */}
                    {/* <div className=""></div> */}
                    {/* 对话面板 */}
                    {/* <div className=""> */}
                        {chatList.map((item, index) => {
                            return (
                                item.type === 1 ?
                                    <div className="self flex flex-row-reverse my-3" key={index}>
                                        <img src="" alt="" />
                                        <div className={cx(["relative mr-2 p-1 text-sm rounded", styles.popColor, styles.pop])}>
                                            {item.content}
                                        </div>
                                    </div> : <Pop key={index}>{item.content}</Pop>
                            )
                        })}
                    {/* </div> */}
                </div>
                {/* <div className="border border-gray-100">

            </div> */}
                <div className="absolute bottom-0 py-3 bg-slate-50/90 flex justify-between items-center w-full">
                    <input value={text} enterKeyHint="send" type="text" className="ml-3 w-11/12 h-7 rounded-md pl-1 text-black py-2" onChange={(e) => setText(e.target.value)} onKeyDown={(e) => sendHandler(e as unknown as KeyboardEvent)} />
                    <Popover
                        isOpen={Emojivisible} 
                        positions={['top', 'bottom', 'left', 'right']}
                        content={<EmojiPicker onEmojiClick={setEmoji}/>}>
                      <EmojiButton onClick={() => setEmojivisible(!Emojivisible)}></EmojiButton>
                    </Popover>
                </div>
            </div>
            {/* 聊天室信息 */}
            {chooseSideBar()}
        </div>
    );
};

export default Chatroom