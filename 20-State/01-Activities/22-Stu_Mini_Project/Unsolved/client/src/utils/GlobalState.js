import React, { createContext, useReducer, useContext } from "react";
import UPDATE_POSTS from "./action"
import ADD_POST from "./action"
import REMOVE_POST from "./action"
import SET_CURRENT_POST from "./action"
import LOADING from "./action"

const CountContext = createContext();
const { Provider } = CountContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_POSTS":
      return UPDATE_POSTS
    case "ADD_POST":
      return ADD_POST
    case "REMOVE_POST":
      return REMOVE_POST
    case "SET_CURRENT_POST":
      return SET_CURRENT_POST
    case "LOADING":
      return LOADING
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return <Provider value={[state, dispatch]} {...props} />;;
};

const useStoreContext = () => {
  return useContext(CountContext);
};

export { StoreProvider, useStoreContext };
