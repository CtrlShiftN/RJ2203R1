import { LOGIN, LOGIN_SUCCESS, FETCH_USER, FETCH_USER_SUCCESS } from "./constants";

const initialState = {
    users: [],
    userLogined: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: return { ...state, userLogined: action.payload }; break;
        case FETCH_USER_SUCCESS: return { ...state, users: action.payload }; break;

    }
    return state;
}
export default rootReducer;