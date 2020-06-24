import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import { auth } from "./firebase/firebase";
import "./App.css";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInUp}></Route>
          <Route path="/" component={Homepage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
