import { LOGIN } from "./constants";

export default function loginRedux(account) {
    return {
        type: LOGIN,
        payload: account
    }
}

export default function deleteAccount(account){
    return {
        type: DELETE_ACCOUNT,
        payload: account
    }
}