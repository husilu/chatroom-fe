import { FC, useState } from "react";
import { AiOutlineSmile } from 'react-icons/ai';
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
            // console.log('userReducer', userReducer.getState())
            setText("")
        }
    }
    return (
        <div className="bg-sky-300 grid grid-cols-4 w-screen h-screen">
            <div className="col-span-4 border border-gray-100 flex flex-col">
                {/* <div className="border-b-2 border-stone-50"></div> */}
                {/* <div className=""></div> */}
                {/* 对话面板 */}
                <div className="px-3">
                    {chatList.map((item, index) => {
                        return (
                            <div className="self flex flex-row-reverse my-3" key={index}>
                                <img src="" alt="" />
                                <div className="relative pop mr-2 bg-slate-50/90 p-1 text-sm rounded pop-trangle">
                                    {item}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* <div className="border border-gray-100">

            </div> */}
            <div className="fixed bottom-0 flex p-3 bg-slate-50/90 w-screen flex justify-between items-center">
                <input value={text} enterKeyHint="send" type="text" className="w-11/12 h-7 rounded-md pl-1 text-black py-2" onChange={(e) => setText(e.target.value)} onKeyDown={(e) => sendHandler(e as unknown as KeyboardEvent)}/>
                <AiOutlineSmile className="text-sky-400"></AiOutlineSmile>
            </div>
        </div>
    );
};

export default Chatroom