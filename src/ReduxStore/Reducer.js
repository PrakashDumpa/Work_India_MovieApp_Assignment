import { INITIAL } from "./Constants";

const initialState = {
  searchInput: "",
  apiStatusConstants: INITIAL,
  pageNo: 1,
};

const reducerFunction = (state = initialState, action) => {
  // console.log("action", action);
  switch (action.type) {
    case "search":
      return { ...state, searchInput: action.payload.searchTitle };
    case "page":
      return { ...state, pageNo: action.payload.pageNo };
    default:
      return { ...state };
  }
};

export default reducerFunction;
