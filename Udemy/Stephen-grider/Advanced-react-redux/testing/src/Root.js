import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "reducers";
import async from "./middlewares/async";

const Root = ({ children, initialState }) => {
  const store = createStore(reducers, initialState, applyMiddleware(async));

  return (
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};

export default Root;
