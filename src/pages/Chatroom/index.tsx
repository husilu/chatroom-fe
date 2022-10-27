import { FC, useState } from "react";
import { AiOutlineSmile } from 'react-icons/ai';
import cx from 'classnames'
import styles from './index.module.scss'
// import userReducer from 'src/store'
interface IProps {
    content?: string,
}
const Chatroom: FC<IProps> = () => {
    // 消息内容
    const [text, setText] = useState("");
    // 消息数组
    const [chatList, setchatList] = useState<string[]>([]);
    function sendHandler(e:KeyboardEvent) {
        // 发送消息
        if (e.key === 'Enter') {
            chatList.push(text)
            setchatList([...chatList])
            setText("")
        }
    }
    return (
        <div className={cx(["grid grid-cols-4 relative w-full h-80v", styles.chatconwrap])}>
            <div className="col-span-4 border border-gray-100 flex flex-col">
                {/* <div className="border-b-2 border-stone-50"></div> */}
                {/* <div className=""></div> */}
                {/* 对话面板 */}
                <div className="px-3">
                    {chatList.map((item, index) => {
                        return (
                            <div className="self flex flex-row-reverse my-3" key={index}>
                                <img src="" alt="" />
                                <div className={cx(["relative mr-2 p-1 text-sm rounded", styles.popColor, styles.pop])}>
                                    {item}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* <div className="border border-gray-100">

            </div> */}
            <div className="absolute bottom-0 py-3 bg-slate-50/90 flex justify-between items-center w-full">
                <input value={text} enterKeyHint="send" type="text" className="ml-3 w-11/12 h-7 rounded-md pl-1 text-black py-2" onChange={(e) => setText(e.target.value)} onKeyDown={(e) => sendHandler(e as unknown as KeyboardEvent)}/>
                <AiOutlineSmile className="text-sky-400 flex-auto flex justify-between items-center"></AiOutlineSmile>
            </div>
        </div>
    );
};

export default Chatroom