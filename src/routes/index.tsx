// ./src/router.tsx
// import Chatroom from "@/pages/Chatroom";
// import Login from "@/pages/Login";
import Chatroom from 'src/pages/Chatroom';
import Login from 'src/pages/Login';

interface IRouter {
  path: string;
  element: JSX.Element;
}

const router: Array<IRouter> = [
  {
    path: "/",
    element: <Chatroom />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default router;