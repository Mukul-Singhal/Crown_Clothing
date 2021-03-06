import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import Checkout from "./pages/checkout/checkout";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/user-action";
import { selectCurrentUser } from "./redux/user/user-selector";
import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
            }
          ></Route>
          <Route exact path="/" component={Homepage}></Route>
        </Switch>
      </div>
    );
  }
}
const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
