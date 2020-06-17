import React from "react";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const Hatspage = () => <div>hello</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop/hats" component={Hatspage}></Route>
        <Route path="/" component={Homepage}></Route>
      </Switch>
    </div>
  );
}

export default App;
