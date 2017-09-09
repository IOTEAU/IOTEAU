import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import $ from "jquery"
import { saveUser } from '../Config/Authentication'
import { firebaseAuth, dbRef, user } from '../Config/fireConfig'
import fLogin from '../Component/formLoginComplete'
import Login from '../Component/Login'
import '../loading.css'
import 'bootstrap/dist/css/bootstrap.css'

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/fLogin', setState: { from: props.location } }} />}
    />
  )
}


export default class figForm extends Component {
state = {
    authed: false,
    loading: true,
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
       if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }


  render() {
    return this.state.loading === true ?
      <div className="text-center" style={{ padding: '20%' }}>
        <div id="inTurnBlurringTextG">
          <div id="inTurnBlurringTextG_1" className="inTurnBlurringTextG">L</div>
          <div id="inTurnBlurringTextG_2" className="inTurnBlurringTextG">o</div>
          <div id="inTurnBlurringTextG_3" className="inTurnBlurringTextG">a</div>
          <div id="inTurnBlurringTextG_4" className="inTurnBlurringTextG">d</div>
          <div id="inTurnBlurringTextG_5" className="inTurnBlurringTextG">i</div>
          <div id="inTurnBlurringTextG_6" className="inTurnBlurringTextG">n</div>
          <div id="inTurnBlurringTextG_7" className="inTurnBlurringTextG">g</div>
        </div>
      </div> : (
        <BrowserRouter>
          <Switch>
            {this.state.authed
              ? <PrivateRoute authed={this.state.authed} exact component={fLogin} />
              : <PublicRoute authed={this.state.authed} exact component={Login} />}
          </Switch>
        </BrowserRouter>
      );
  }
}