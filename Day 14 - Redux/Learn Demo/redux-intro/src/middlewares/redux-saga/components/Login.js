import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginRedux from "../redux/actions";

export default function Login() {
    const [account, setAccount] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogined = useSelector(state => state.userLogined);

    const login = (e) => {
        e.preventDefault();
        dispatch(loginRedux(account));
        // console.log(account);
    }

    useEffect(() => {
        if (userLogined.username) {
            navigate('/users')
        }
    }, [userLogined]);

    return (
        <div className="login-form container pt-5">
            <form>
                <div className="form-outline mb-4">
                    <input name="username" id="form2Example1" className="form-control" onChange={e => { setAccount({ ...account, [e.target.name]: e.target.value }) }} />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" name="password" id="form2Example2" className="form-control" onChange={e => { setAccount({ ...account, [e.target.name]: e.target.value }) }} />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4" onClick={login}>Sign in</button>
            </form>
        </div>
    );
}