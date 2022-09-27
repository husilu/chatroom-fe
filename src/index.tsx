import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import routes from './routes';
import "./styles/main.css"
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
