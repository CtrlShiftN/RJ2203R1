import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../redux/store";
import Login from './Login';
import User from "./User";

export default function Home() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/users" element={<User />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}