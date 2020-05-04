// import axios from "axios";

// export const getData = () => {
//     return async (dispatch, getState) => {
//         // redirect pages to endpoint news-category
//         await this.props.history.replace("/news-category/" + categoryName);

//         // activate loading
//         await this.setState({ isLoading: true });

//         // get params from url
//         const paramCategory = await this.props.match.params.category;

//         await axios
//         .get(urlHeadline + "&category=" + paramCategory)
//         .then((response) => {
//             this.setState({ listNews: response.data.articles, isLoading: false });
//         })
//         .catch((error) => {
//             this.setState({ isLoading: false });
//         });
//     }

// }