import { createStore } from "redux";

const initState = {
    BASE_API_URL: "",
}

const rootReducer = (state = initState, action) => {
    return state;
}

const store = createStore(rootReducer);

export default store;