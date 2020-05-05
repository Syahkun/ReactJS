const initialState = {listNews: [], isLoading: true, search:""}

export default function newsReducer(stateNews = initialState, action) {
    switch (action.type) {
        case "REQUEST_LIST_NEWS_SUCCESS":
            return {
                ...stateNews,
                isLoading: false,
                listNews: action.payload,
            };
        case "ACTIVATE_LOADING":
            return {
                ...stateNews,
                isLoading: true,
            };
        case "DEACTIVATE_LOADING":
            return {
                ...stateNews,
                isLoading: false,
            };
        case "ADD_VALUE_SEARCH":
            return{
                ...stateNews,
                search: action.value,
            }
        case "REQUEST_SEARCH_SUCCESS":
            return{
                ...stateNews,
                listNews: action.payload2,
                isLoading: false,
            }
        case "REQUEST_LIST_NEWS_CATEGORY":
            return{
                ...stateNews,
                listNews: action.payload3,
                isLoading:false,
            }
        default:
            return stateNews;
    }
}