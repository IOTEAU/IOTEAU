import React, { Component } from 'react'
import { Graph } from '../Component/Graph'
import $ from "jquery"
import { dbFirebase } from '../Config/connectFirebase'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';


function goBack() {
    $('#idS101').css({ display: 'none' });
    $('#idS102').css({ display: 'none' });
    $('#idS103').css({ display: 'none' });
    $('#idS104').css({ display: 'none' });
    $('#allRoom').css({ display: 'block' });
}

export var S101Page = React.createClass({
    render: function () {
        return (

            <div className="col-12">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <button onClick={() => goBack()}>←ย้อนกลับ</button>
                        </div>
                        <div className="col-9">
                            <center>ห้อง S101</center>
                        </div>
                        <div className="col-12">
                            <center>
                                <div id="container">
                                    <Graph />
                                </div>
                            </center>
                        </div>
                        <div className="col-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <center>
                                            <img src="https://maxcdn.icons8.com/iOS7/PNG/100/Very_Basic/idea-100.png" title="Idea" width="100" />
                                            <h4>แสงสว่าง</h4><br />
                                            <label className="switch" id="Light_Row_one">
                                                <input onclick="Light_Row_one.set(+this.checked)" type="checkbox" />
                                                <div className="slider round"></div>
                                            </label>
                                        </center>
                                    </div>
                                    <div className="col-6">
                                        <center>
                                            <img src="https://maxcdn.icons8.com/iOS7/PNG/100/Household/air_conditioner-100.png" title="Air Conditioner" width="100" />
                                            <h4>เครื่องปรับอากาศ</h4><br />
                                            <label className="switch" id="Airone">
                                                <input onclick="addArr(1)" type="checkbox" /><div className="slider round"></div>
                                            </label><br />
                                            <label className="switch" id="Airone">
                                                <input onclick="addArr(2)" type="checkbox" /><div className="slider round"></div>
                                            </label>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export var S102Page = React.createClass({
    render: function () {
        return (

            <div className="col-12">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <button onClick={() => goBack()}>←ย้อนกลับ</button>
                        </div>
                        <div className="col-9">
                            <center>ห้อง S102</center>
                        </div>
                        <div className="col-12">
                            <center>
                                <div id="container">
                                    <Graph />
                                </div>
                            </center>
                        </div>
                        <div className="col-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <center>
                                            <img src="https://maxcdn.icons8.com/iOS7/PNG/100/Very_Basic/idea-100.png" title="Idea" width="100" />
                                            <h4>แสงสว่าง</h4><br />
                                            <label className="switch" id="Light_Row_one">
                                                <input onclick="Light_Row_one.set(+this.checked)" type="checkbox" />
                                                <div className="slider round"></div>
                                            </label>
                                        </center>
                                    </div>
                                    <div className="col-6">
                                        <center>
                                            <img src="https://maxcdn.icons8.com/iOS7/PNG/100/Household/air_conditioner-100.png" title="Air Conditioner" width="100" />
                                            <h4>เครื่องปรับอากาศ</h4><br />
                                            <label className="switch" id="Airone">
                                                <input onclick="addArr(1)" type="checkbox" /><div className="slider round"></div>
                                            </label><br />
                                            <label className="switch" id="Airone">
                                                <input onclick="addArr(2)" type="checkbox" /><div className="slider round"></div>
                                            </label>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export var S103Page = React.createClass({
    render: function () {
        return (

            <div className="col-12">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <button onClick={() => goBack()}>←ย้อนกลับ</button>
                        </div>
                        <div className="col-9">
                            <center>ห้อง S103</center>
                        </div>
                        <div className="col-12">
                            <center>
                                <div id="container">
                                    <Graph />
                                </div>
                            </center>
                        </div>
                        <div className="col-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <center>
                                            <img src="https://maxcdn.icons8.com/iOS7/PNG/100/Very_Basic/idea-100.png" title="Idea" width="100" />
                                            <h4>แสงสว่าง</h4><br />
                                            <label className="switch" id="Light_Row_one">
                                                <input onclick="Light_Row_one.set(+this.checked)" type="checkbox" />
                                                <div className="slider round"></div>
                                            </label>
                                        </center>
                                    </div>
                                    <div className="col-6">
                                        <center>
                                            <img src="https://maxcdn.icons8.com/iOS7/PNG/100/Household/air_conditioner-100.png" title="Air Conditioner" width="100" />
                                            <h4>เครื่องปรับอากาศ</h4><br />
                                            <label className="switch" id="Airone">
                                                <input onclick="addArr(1)" type="checkbox" /><div className="slider round"></div>
                                            </label><br />
                                            <label className="switch" id="Airone">
                                                <input onclick="addArr(2)" type="checkbox" /><div className="slider round"></div>
                                            </label>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export var S104Page = React.createClass({
    render: function () {
        return (

            <div className="col-12">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <button onClick={() => goBack()}>←ย้อนกลับ</button>
                        </div>
                        <div className="col-9">
                            <center>ห้อง S104</center>
                        </div>
                        <div className="col-12">
                            <center>
                                <div id="container">
                                    <Graph />
                                </div>
                            </center>
                        </div>
                        <div className="col-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <center>
                                            <img src="https://maxcdn.icons8.com/iOS7/PNG/100/Very_Basic/idea-100.png" title="Idea" width="100" />
                                            <h4>แสงสว่าง</h4><br />
                                            <label className="switch" id="Light_Row_one">
                                                <input onclick="Light_Row_one.set(+this.checked)" type="checkbox" />
                                                <div className="slider round"></div>
                                            </label>
                                        </center>
                                    </div>
                                    <div className="col-6">
                                        <center>
                                            <img src="https://maxcdn.icons8.com/iOS7/PNG/100/Household/air_conditioner-100.png" title="Air Conditioner" width="100" />
                                            <h4>เครื่องปรับอากาศ</h4><br />
                                            <label className="switch" id="Airone">
                                                <input onclick="addArr(1)" type="checkbox" /><div className="slider round"></div>
                                            </label><br />
                                            <label className="switch" id="Airone">
                                                <input onclick="addArr(2)" type="checkbox" /><div className="slider round"></div>
                                            </label>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});