import { FC, useState } from "react";
interface IProps {
    content?: string,
}
const Chatroom: FC<IProps> = (data) => {
    const [text, setText] = useState("");
    const [chatList, setchatList] = useState([]);
    function sendHandler(e:KeyboardEvent) {
        // 发送消息
        if (e.key === 'Enter') {
            console.log(`${text}已发送！`)
            setText("")
        }
    }
    return (
        <div className="bg-sky-300 grid grid-cols-4 w-screen h-screen">
            <div className="col-span-4 border border-gray-100 flex flex-col">
                {/* <div className="border-b-2 border-stone-50"></div> */}
                {/* <div className=""></div> */}
                {/* 对话面板 */}
                <div className="">
                    {/* 这里渲染对话 */}
                </div>
            </div>
            {/* <div className="border border-gray-100">

            </div> */}
            <div className="fixed bottom-0 flex p-3">
                <input value={text} enterKeyHint="send" type="text" className="rounded-md pl-1 text-black py-2" onChange={(e) => setText(e.target.value)} onKeyDown={(e) => sendHandler(e as unknown as KeyboardEvent)}/>
            </div>
        </div>
    );
};

export default Chatroom