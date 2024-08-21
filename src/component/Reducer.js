const reducer = (state, action) => {
  switch (action.type) {
    case "Data Loading":
      return {
        ...state,
        isLoading: true,
      };

    case "Get Data":
      return {
        ...state,
        hits: action.payload.hits,
        isLoading: false,
        nbpage: action.payload.nbpage,
      };

    case "REMOVEPOST":
      return {
        ...state,
        hits: state.hits.filter((hits) => hits.objectID !== action.payload),
      };
    case "SEARCHPOST":
      return {
        ...state,
        query: action.payload,
      };
    case "PREV": {
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
    }
    case "NEXT": {
      let pageNUMINC = state.page + 1;
      if (pageNUMINC >= state.nbpages) {
        pageNUMINC = 1;
      }
      return {
        ...state,

        page: pageNUMINC,
      };
    }
    default:
      return state;
  }
};
export default reducer;
