import { useState } from 'react';
import { FC } from "react";
interface IProps {
    content?: string,
}
const Login: FC<IProps> = (data) => {
    const [isloginState, setisloginState] = useState(true); // 是否是登录
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    function userChange(e: Event) {

    }
    return (
        <div className='flex flex-col justify-center items-center bg-sky-300 w-screen h-screen font-mono text-white'>
            <div className="w-11/12 mx-auto p-2.5 rounded-lg border border-gray-100 border-solid">
                <div className='flex justify-between mb-5'>
                    <span className='text-xl'>{isloginState ? 'Welcome to Chatroom' : 'Create new account'}</span>
                    <span className='text-base border-dashed border-b-1 border-white ' onClick={() => setisloginState(!isloginState)}>{isloginState ? 'Sign Up' : 'Sign In'}</span>
                </div>
                <label className='mb-3 flex'>
                    <span className='mr-2'>Username</span>
                    <input className="flex rounded-md flex-auto pl-1" type="text" placeholder="username" value={username}/>
                </label>
                <label className='mb-5 flex'>
                    <span className='mr-2'>Password</span>
                    <input className="flex rounded-md flex-auto pl-1" type="password" placeholder="password" value={password}/>
                </label>
                <div className='border border-double text-center p-1'>
                   { isloginState ? 'Sign Up' : 'Login 🚀'} 
                </div>
            </div>
        </div>
    );
};

export default Login