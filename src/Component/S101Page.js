import React, { Component } from 'react'
import {Graph} from '../Component/Graph'
import $ from "jquery"
import { dbFirebase } from '../Config/connectFirebase'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';


function goBack() {
    window.history.back();
}


export default class S101Page extends Component {

    render() {

        return (
            <div className="content container">
                <div className="docs-example">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            <button onclick={() => goBack()}>←ย้อนกลับ</button>
                                        </div>
                                        <div className="col-10">
                                            <center>ห้อง S101</center>
                                        </div>
                                        <div className="col-12">
                                            <center>
                                                    <Graph />
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
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}