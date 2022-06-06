import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_USER, FETCH_USER_SUCCESS, LOGIN, LOGIN_SUCCESS } from "../redux/constants";

function* getAllUser(action) {
    try {
        const res = yield axios.get('http://localhost:3001/user');
        yield put({ type: FETCH_USER_SUCCESS, payload: res.data });
    } catch (error) {
        console.log('error - getUser: ', error)
    }
}

function* authSagaFunc(action) {
    const account = action.payload;
    if (account.username === "admin" && account.password === "letmein") {
        yield put({ type: LOGIN_SUCCESS, payload: account });
        yield put({ type: FETCH_USER, payload: {} });
    }
}

export default function* rootSaga() {
    yield takeLatest(LOGIN, authSagaFunc);
    yield takeLatest(FETCH_USER, getAllUser);
}