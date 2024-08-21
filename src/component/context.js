import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

let link = "http://hn.algolia.com/api/v1/search?query=";
const initialState = {
  hits: [],
  nbpages: 50,
  isLoading: true,
  page: 0,
  query: "react",
};
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchurl = async (url) => {
    dispatch({ type: "Data Loading" });

    try {
      const res = await fetch(url);
      const data = await res.json();

      dispatch({
        type: "Get Data",
        payload: {
          hits: data.hits,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removePost = (id) => {
    dispatch({ type: "REMOVEPOST", payload: id });
  };
  const searchPost = (searchquery) => {
    dispatch({ type: "SEARCHPOST", payload: searchquery });
  };
  const prevPage = () => {
    dispatch({ type: "PREV" });
  };
  const nextPage = () => {
    dispatch({ type: "NEXT" });
  };
  useEffect(() => {
    fetchurl(`${link} query= ${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, prevPage, nextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};
//creation of customhook
const useCustomHook = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useCustomHook };
