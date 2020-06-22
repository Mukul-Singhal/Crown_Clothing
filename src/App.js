import React from "react";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInUp}></Route>
        <Route path="/" component={Homepage}></Route>
      </Switch>
    </div>
  );
}

export default App;
