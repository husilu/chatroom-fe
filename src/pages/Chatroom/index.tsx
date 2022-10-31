import { FC, useState, useEffect } from "react";
import { AiOutlineSmile } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import cx from 'classnames'
import styles from './index.module.scss'
// 加入退出气泡
import Pop from '../../components/noticePop'
// import userReducer from 'src/store'
interface IProps {
    content?: string,
    title: string
}
interface chatItem {
    content: string | React.ReactNode,
    type: number // 可改为枚举？  1 为聊天气泡  2 为提醒气泡
}

const Chatroom: FC<IProps> = (props) => {
    // 聊天面板标题
    let { title } = props;
    // 消息内容
    const [text, setText] = useState("");
    // 消息数组
    const [chatList, setchatList] = useState<chatItem[]>([]);
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
    return (
        <div className={cx(["w-full relative", styles.chatconwrap])}>
            <div className={cx([styles.header])}><div className={styles.headerTitle}>{title}</div><div className={cx([styles.peoplewrap])}><BsFillPeopleFill></BsFillPeopleFill></div></div>
            <div className={cx(["grid grid-cols-4", styles.chatconwrap])}>
                {/* 聊天面板头部 */}
                <div className="col-span-4 border flex flex-col">
                    {/* <div className="border-b-2 border-stone-50"></div> */}
                    {/* <div className=""></div> */}
                    {/* 对话面板 */}
                    <div className="px-3">
                        {chatList.map((item, index) => {
                            return (
                                item.type === 1 ?
                                    <div className="self flex flex-row-reverse my-3" key={index}>
                                        <img src="" alt="" />
                                        <div className={cx(["relative mr-2 p-1 text-sm rounded", styles.popColor, styles.pop])}>
                                            {item.content}
                                        </div>
                                    </div> : <Pop>{item.content}</Pop>
                            )
                        })}
                    </div>
                </div>
                {/* <div className="border border-gray-100">

            </div> */}
                <div className="absolute bottom-0 py-3 bg-slate-50/90 flex justify-between items-center w-full">
                    <input value={text} enterKeyHint="send" type="text" className="ml-3 w-11/12 h-7 rounded-md pl-1 text-black py-2" onChange={(e) => setText(e.target.value)} onKeyDown={(e) => sendHandler(e as unknown as KeyboardEvent)} />
                    <AiOutlineSmile className="text-sky-400 flex-auto flex justify-between items-center"></AiOutlineSmile>
                </div>
            </div>
        </div>
    );
};

export default Chatroom