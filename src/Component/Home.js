import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import $ from "jquery";
import Highcharts from 'highcharts'
import { ReactPageClick } from 'react-page-click';
import { saveUser } from '../Config/Authentication';
import { firebaseAuth, dbRef, user } from '../Config/connectFirebase';
import { dbFirebase } from '../Config/connectFirebase'
import fLogin from '../Component/formLoginComplete';
import Login from '../Component/Login';
import FormPage, { S101, S102 } from '../Component/FormPage';
import S101Page from '../Component/S101Page';
import '../loading.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../docs.css';



function name() {
    var para;
    var num1 = dbFirebase.ref().child('energy'); //เปลี่ยนค่าตัวเลข มาแสดงกราฟ
    num1.on('child_added', function (snapshot) {
        para = snapshot.val();
        // console.log(para)

    });
    return para
}

$(document).ready(function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    var numPerple = dbFirebase.ref('UserinRoom');
    var numPerples = numPerple.on('value', function (snapshot) {
        // conssole.log("UserinRoom:" + snapshot.val());
        var snap = snapshot.val();


        Highcharts.chart('container', {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = name();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },

            title: {
                text: 'ตารางการใช้ไฟ'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {


                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: name()
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});

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

// Modol Window
const styles = {
    popup: {
        position: 'fixed',
        top: '6%',
        left: '6%',
        // width: '70%',
        // height: '70%',
        marginTop: 0,
        marginLeft: 0,
        // fontSize: 30,
        textAlign: 'center',
        background: 'rgba(255,255,255,0.9)',
        borderRadius: 1
    },
    shade: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.3)'
    },
    content: {
        padding: 0
    }
};
const Modol = React.createClass({
    propTypes: {
        // onClose: React.propTypes.func.isRequired
    },
    render() {
        const { onClose, ...props } = this.props;
        return (
            <div>
                <div style={styles.shade} />
                <ReactPageClick notify={this.props.onClose}>
                    <div style={styles.popup}>
                        <div style={styles.content} {...props} />
                    </div>
                </ReactPageClick>
            </div>
        )
    }
});

export default class Home extends Component {

    state = {
        authed: false,
        loading: true,
    }
    getInitialState() {
        showS101Page: false;
        showS102Page: false;
        showS103Page: false;
        showS104Page: false;
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

        const { showS101Page } = this.state;
        const { showS102Page } = this.state;
        const { showS103Page } = this.state;
        const { showS104Page } = this.state;

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
                <div className="content container">
                    <div className="docs-example">
                        <div className="container">
                            <div className="col">
                                <div className="row">
                                    <div className="col-4">
                                        {/* boxฝังซ้าย */}
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* ช่องlogin and logout */}
                                                    <div className="col-auto">
                                                        <BrowserRouter>
                                                            <Switch>
                                                                {this.state.authed
                                                                    ? <PrivateRoute authed={this.state.authed} exact component={fLogin} />
                                                                    : <PublicRoute authed={this.state.authed} exact component={Login} />}
                                                            </Switch>
                                                        </BrowserRouter>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* ช่องเลือกตึก */}
                                                    <div className="col-auto">b</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        {/* boxฝังขวา */}
                                        <div className="container">
                                            <div className="row">
                                                {/* ช่องตึก */}
                                                <div className="col-12">a</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="container">
                                                        <div className="row">
                                                            {/* ช่องroom */}
                                                            <div className="col-3" onClick={() => this.setState({ showS101Page: true })}>
                                                                <S101 />
                                                            </div>{showS101Page ? (
                                                                <Modol onClose={() => this.setState({ showS101Page: false })}>
                                                                    <div id="container">
                                                                        <S101Page />
                                                                    </div>
                                                                </Modol>
                                                            ) : null}
                                                            {/* <div className="col-3" onClick={() => this.setState({ showS102Page: true })}>
                                                                <S102 />
                                                            </div>{showS102Page ? (
                                                                <Modol onClose={() => this.setState({ showS102Page: false })}>
                                                                    <S102Page />
                                                                </Modol>
                                                            ) : null}
                                                            <div className="col-3" onClick={() => this.setState({ showS103Page: true })}>
                                                                <S103 />
                                                            </div>{showS103Page ? (
                                                                <Modol onClose={() => this.setState({ showS103Page: false })}>
                                                                    <S103Page />
                                                                </Modol>
                                                            ) : null}
                                                            <div className="col-3" onClick={() => this.setState({ showS104Page: true })}>
                                                                <S104 />
                                                            </div>{showS104Page ? (
                                                                <Modol onClose={() => this.setState({ showS104Page: false })}>
                                                                    <S104Page />
                                                                </Modol>
                                                            ) : null} */}
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
            )
    }
}