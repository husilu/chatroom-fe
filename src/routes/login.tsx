import { redirect } from "react-router-dom";
import { isAuth } from '../helpers/auth';

export async function action() {
    console.log('ac')
  if (!isAuth()) {
    return redirect("/login");
  }
}