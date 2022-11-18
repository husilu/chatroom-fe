// ./src/router.tsx
// import Chatroom from "@/pages/Chatroom";
// import Login from "@/pages/Login";
import Chatroom from 'src/pages/Chatroom/Layout';
import Login from 'src/pages/Login';
import { ActionFunction } from 'react-router-dom'

import { action as isLogin } from './login'

interface IRouter {
  path: string;
  element: JSX.Element;
  action?: ActionFunction | undefined;
}

const router: Array<IRouter> = [
  {
    path: "/",
    element: <Chatroom />,
    action: isLogin
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default router;