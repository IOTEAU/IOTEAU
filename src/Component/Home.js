import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Switch, Link } from "react-router-dom";
import $ from "jquery";
import Dropdown from "react-dropdown";
import { ReactPageClick } from "react-page-click";
import { saveUser } from "../Config/Authentication";
import { firebaseAuth, dbRef, user } from "../Config/connectFirebase";
import { dbFirebase } from "../Config/connectFirebase";
import fLogin from "../Component/formLoginComplete";
import Login from "../Component/Login";
import FormPage, { S101, S102 } from "../Component/FormPage";
import { S101Page, S102Page } from "../Component/RoomPage";
import "../loading.css";
import "bootstrap/dist/css/bootstrap.css";
import "../docs.css";
function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/Login", state: { from: props.location } }}
          />
        )}
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/fLogin", setState: { from: props.location } }}
          />
        )}
    />
  );
}

// การทำงานของห้อง S101
function goS101() {
  $("#idS101").css({ display: "block" });
  $("#allRoom").css({ display: "none" });
}
// การทำงานของห้อง S102
function goS102() {
  $("#idS102").css({ display: "block" });
  $("#allRoom").css({ display: "none" });
}
//  การเลือกตึก
const options = ["ตึก A", "ตึก C", "ตึก S", "ตึก M"];

// เงื่อนไขในการเช็คค่า
export default class Home extends Component {
  state = {
    authed: false,
    loading: true
  };
  getInitialState() {
    showS101Page: false;
    showS102Page: false;
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          showS101Page: true
        });
      } else {
        this.setState({
          authed: false,
          loading: false,
          showS101Page: false
        });
        // $("#idS101").css({ display: "none" });
        // $("#idS102").css({ display: "none" });

        $("#allRoom").css({ display: "block" });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { showS101Page } = this.state;
    const { showS102Page } = this.state;

    return this.state.loading === true ? (
      //<div>Loadding//
      <div className="text-center" style={{ padding: "20%" }}>
        <div id="inTurnBlurringTextG">
          <div id="inTurnBlurringTextG_1" className="inTurnBlurringTextG">
            L
          </div>
          <div id="inTurnBlurringTextG_2" className="inTurnBlurringTextG">
            o
          </div>
          <div id="inTurnBlurringTextG_3" className="inTurnBlurringTextG">
            a
          </div>
          <div id="inTurnBlurringTextG_4" className="inTurnBlurringTextG">
            d
          </div>
          <div id="inTurnBlurringTextG_5" className="inTurnBlurringTextG">
            i
          </div>
          <div id="inTurnBlurringTextG_6" className="inTurnBlurringTextG">
            n
          </div>
          <div id="inTurnBlurringTextG_7" className="inTurnBlurringTextG">
            g
          </div>
        </div>
      </div>
    ) : (
      <div className="content container">
        <div className="docs-example">
          <div className="container">
            <div className="col">
              <div className="row">
                <div className="col-3">
                  {/* boxฝังซ้าย */}
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        {/* ช่องlogin and logout */}
                        <div className="col-auto">
                          <BrowserRouter>
                            <Switch>
                              {this.state.authed ? (
                                <PrivateRoute
                                  authed={this.state.authed}
                                  exact
                                  component={fLogin}
                                />
                              ) : (
                                <PublicRoute
                                  authed={this.state.authed}
                                  exact
                                  component={Login}
                                />
                              )}
                            </Switch>
                          </BrowserRouter>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        {/* ช่องเลือกตึก */}
                        <div className="col-auto">
                          <center>
                            <h3>
                              กรุณาเลือกตึก
                              <hr />
                            </h3>
                            <Dropdown
                              options={options}
                              onChange={this._onSelect}
                              placeholder="เลื่อกตึก"
                            />
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-9">
                  {/* boxฝังขวา */}
                  <div id="idS101" style={{ display: "none" }}>
                    <S101Page />
                  </div>
                  <div id="idS102" style={{ display: "none" }}>
                    <S102Page />
                  </div>

                  <div
                    className="container"
                    id="allRoom"
                    style={{ display: "block" }}
                  >
                    <div className="row">
                      {/* ช่องตึก */}
                      <div className="col-12">
                        <center>ตึก S</center>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="container">
                          <div className="row">
                            {/* ช่องroom */}
                            {this.state.authed ? 
                              
                              <div className="col-3" onClick={() => goS101()}>
                                <S101 />
                              </div>
                              :<div className="col-3">
                                <S101 />
                              </div>
                            }
                            {this.state.authed}
                            
                            <div className="col-3" onClick={() => goS102()}>
                                <S102 />
                                <div className="col-3">

                                                            
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
