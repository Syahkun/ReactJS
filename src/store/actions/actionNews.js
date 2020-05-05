
import axios from "axios";

//News Api
const apiKey = "874c2936717449ac9fa8d4494e7fc947";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;


export const getListNews = (category) => {
    alert("masuk get listnews")
    return async (dispatch) => {
        alert("masuk dispatch")
        let urlHeadlineNews;
        if (category) {
            urlHeadlineNews = urlHeadline + "&category=" + category;
        } else {
            urlHeadlineNews = urlHeadline;
        } 
        await dispatch({ type: "ACTIVATE_LOADING"})

        await axios
            .get(urlHeadlineNews)
            .then((response) => {
                console.warn("cek hasil respon", response )
                dispatch({ 
                    type: "REQUEST_LIST_NEWS_SUCCESS", 
                    payload:response.data.articles 
                })
                // this.setState({ listNews: response.data.articles, isLoading: false });
            })
            .catch((error) => {
                dispatch({
                    type: "DEACTIVATE_LOADING"
                })
                // this.setState({ isLoading: false });
            });
    }
    
}

export const handleInputChange=(event)=>{
    return async dispatch => {
        let  value = event.target.value
        await dispatch({
            type: "ADD_VALUE_SEARCH"
        })
        await dispatch(searchNews(value))
    };
}

export const searchNews =(keyword)=>{
    return async dispatch => {
        if (keyword.length > 1) {
            await dispatch({
                type: "ACTIVATE_LOADING"
            })
            try {
                const response = await axios.get(
                    baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey  
                );
                await dispatch({
                    type: "REQUEST_SEARCH_SUCCESS",
                    payload2:response.data.articles
                })
                // this.setState({ listNews: response.data.articles, isLoading: false });
            } catch (error){
                console.error(error);
            } 
        }
    }
};

export const getListNewsCategory = (paramCategory) => {
    alert("masuk getlistnews category")
    return async (dispatch) => {
        alert("masuk dispatch getlistnews category")
        // redirect pages to endpoint news-category
        // await this.props.history.replace("/news-category/" + categoryName);
    
        // activate loading
        await dispatch({ type: "ACTIVATE_LOADING"})
          // await this.setState({ isLoading: true });
    
        // get params from url
        // const paramCategory = await this.props.match.params.category;
    
        // request news by category
        await axios
          .get(urlHeadline + "&category=" + paramCategory)
          .then((response) => {
            dispatch({ 
                type: "REQUEST_LIST_NEWS_CATEGORY", 
                payload3:response.data.articles 
            })
            // this.setState({ listNews: response.data.articles, isLoading: false });
          })
          .catch((error) => {
            dispatch({
                type: "DEACTIVATE_LOADING"
            })
          });
      };
    
}
    



