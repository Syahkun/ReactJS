import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk";

//import reducer
// import newsReducer from "./reducer/newsReducer";
import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
    // news: newsReducer,
    user: userReducer,
});

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
});

store.subscribe(() => console.warn("cek state store", store.getState()))

export default store;