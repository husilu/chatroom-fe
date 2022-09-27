import { FC } from "react";
interface IProps {
    content?: string,
}
const Chatroom: FC<IProps> = (data) => {
    // const [content, setContent] = useState("");

    // useEffect(() => {
    //   axios.post("/api/getDemoData", {
    //     content: "这是一个Demo页面"
    //   }).then((res:any) => {
    //     setContent(res.data?.data?.content)
    //   })
    // }, [])

    return (
        <div>
            chatroom
        </div>
    );
};

export default Chatroom