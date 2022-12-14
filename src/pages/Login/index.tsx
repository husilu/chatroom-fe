import { useState, useEffect } from 'react';
import { FC } from "react";
import { AiOutlineLoading } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { loginFetch } from '../../api/user'
import { loginFetchThunk, registerFetchThunk } from '../../store/user';
import { AppDispatch } from '../../store/index';
import cs from 'classnames';
import styles from './index.module.scss';
import toast, { Toaster } from 'react-hot-toast';
interface IProps {
    content?: string,
}
const Login: FC<IProps> = (data) => {
    const [isloginState, setisloginState] = useState(true); // 是否是登录
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [shake, setShake] = useState(false);
    const [isloadingState, setisloadingState] = useState(false);
    const loading = useSelector((state:any) => state.user.loading);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            toast('loading...')
        }
    }, [loading])
    async function LoginHandler() {
        setShake(false)
        try {
            dispatch(loginFetchThunk({username, password}))
            // navigate("/")
        } catch(err) {
            setTimeout(() => {
                setShake(true)
            })
        }
        
    }
    function RegisterHandler() {
        try {
            dispatch(registerFetchThunk({username, password}))
            // navigate("/")
        } catch(err) {
            setTimeout(() => {
                setShake(true)
            })
        }
    }
    return (
        <div className='flex flex-col justify-center items-center bg-sky-300 w-screen h-screen font-mono text-white'>
            <Toaster />
            <div className={cs(["w-11/12 mx-auto p-2.5 rounded-lg border border-gray-100 border-solid", shake ? styles.headShake : ""])}>
                <div className='flex justify-between mb-5'>
                    <span className='text-xl'>{isloginState ? 'Welcome to Chatroom' : 'Create new account'}</span>
                    <span className='text-base border-dashed border-b-1 border-white flex-auto whitespace-nowrap' onClick={() => setisloginState(!isloginState)}>{isloginState ? 'Sign Up' : 'Sign In'}</span>
                </div>
                <label className='mb-3 flex'>
                    <span className='mr-2'>Username</span>
                    <input className="rounded-md w-full pl-1 focus:ring-sky-500 focus:ring-1 text-black" type="text" placeholder="username" value={username} onChange={(e) => setusername(e.target.value)}/>
                </label>
                <label className='mb-5 flex'>
                    <span className='mr-2'>Password</span>
                    <input className="rounded-md w-full pl-1 focus:ring-sky-500 focus:ring-1 text-black" type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                </label>
                <button className='flex w-full border justify-center items-center border-double p-1 focus:ring-sky-500 text-white focus:ring-1 cursor-pointer hover:bg-white hover:text-sky-500 rounded-lg' disabled={isloadingState} type="button" onClick={isloginState ? () => LoginHandler() : () => RegisterHandler()}>
                   {isloadingState ? <><AiOutlineLoading className="animate-spin h-5 w-5 mr-3">
                   </AiOutlineLoading>Loading...</>: !isloginState ? 'Sign Up' : 'Login 🚀'}
                </button>
            </div>
        </div>
    );
};

export default Login