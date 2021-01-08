import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CustomRouter from "./router";

function App(props) {

return (
  <div className="App">
    <CustomRouter />
  </div>
);
}


export default hot(withRouter(App));
