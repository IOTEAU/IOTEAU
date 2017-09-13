import React, { Component } from 'react'
import $ from "jquery"
import { dbFirebase } from '../Config/connectFirebase'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';

var queu = [];

function addArr(num) {
    // var status = true;

    if (queu.length < 2) {

        queu.push(num)

    } if (queu.length == 2) {

        outQueue()

    }

    console.log(queu)
    console.log(queu.length)
}

function outQueue() {

    var upToFirebaseRoom1Air2 = dbFirebase.ref("room1/air1")
    var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")
    var upToFirebaseRoom2Air1 = dbFirebase.ref("room2/air")
    var upToFirebaseRoom2Air2 = dbFirebase.ref("room2/air1")

    setInterval(() => {
        var dataOutQueue = queu.shift()
        if (dataOutQueue == 1) {
            upToFirebaseRoom1Air1.set(dataOutQueue)
        } else if (dataOutQueue == 2) {
            upToFirebaseRoom1Air2.set(dataOutQueue)
        } else if (dataOutQueue == 3) {
            upToFirebaseRoom2Air1.set(dataOutQueue)
        } else if (dataOutQueue == 4) {
            upToFirebaseRoom2Air2.set(dataOutQueue)
        }

        console.log(dataOutQueue)
    }, 5000)
}

function goBack() {
    $('#idS101').css({ display: 'none' });
    $('#idS102').css({ display: 'none' });
    $('#idS103').css({ display: 'none' });
    $('#idS104').css({ display: 'none' });
    $('#allRoom').css({ display: 'block' });
}

export var S101Page = React.createClass({
    componentDidMount() {
        var numPerple1 = dbFirebase.ref("room1/UserinRoom");
        var numPerples = numPerple1.on("value", function (snapshot) {
            document.querySelector("#Light_Row_one > input").checked = snapshot.val();
            $('#Light_Row_one').click(function () {
                numPerples = numPerple1.set('0', function () {

                })
            })

        });

        var numAIR0R2 = dbFirebase.ref('room1/air');
        var numAIR0R2s = numAIR0R2.on('value', function (snapshot) {
            var snapAIR0R2 = snapshot.val();
            var num = 0
            var AIR;
            if (snapAIR0R2 == num) {
                document.querySelector("#Airone1R1 > input").checked = false
            } else {
                document.querySelector("#Airone1R1 > input").checked = true
            }
        });

        var numAIR1R2 = dbFirebase.ref('room1/air1');
        var numAIR1R2s = numAIR1R2.on('value', function (snapshot) {
            var snapAIR1R2 = snapshot.val();
            var num = 0
            var AIR;
            if (snapAIR1R2 == num) {
                document.querySelector("#Airone2R1 > input").checked = false
            } else {
                document.querySelector("#Airone2R1 > input").checked = true
            }
        });
    },
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
                                            <label className="switch" id="Airone1R1">
                                                <input onclick={() => addArr(1)} type="checkbox" /><div className="slider round"></div>
                                            </label><br />
                                            <label className="switch" id="Airone2R1">
                                                <input onclick={() => addArr(2)} type="checkbox" /><div className="slider round"></div>
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
    componentDidMount() {
        var numPerple2 = dbFirebase.ref("room2/UserinRoom");
        var numPerples2 = numPerple2.on("value", function (snapshot) {
            document.querySelector("#Light_Row_one1 > input").checked = snapshot.val();
            $('#Light_Row_one1').click(function () {
                numPerples2 = numPerple2.set('0', function () {

                })
            })
        });

        var numAIR0R2 = dbFirebase.ref('room2/air');
        var numAIR0R2s = numAIR0R2.on('value', function (snapshot) {
            var snapAIR0R2 = snapshot.val();
            var num = 0
            var AIR;
            if (snapAIR0R2 == num) {
                document.querySelector("#Airone1R2 > input").checked = false
            } else {
                document.querySelector("#Airone1R2 > input").checked = true
            }
        });

        var numAIR1R2 = dbFirebase.ref('room2/air1');
        var numAIR1R2s = numAIR1R2.on('value', function (snapshot) {
            var snapAIR1R2 = snapshot.val();
            var num = 0
            var AIR;
            if (snapAIR1R2 == num) {
                document.querySelector("#Airone2R2 > input").checked = false
            } else {
                document.querySelector("#Airone2R2 > input").checked = true
            }
        });
    },
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
                                            <label className="switch" id="Light_Row_one1">
                                                <input onclick="Light_Row_one1.set(+this.checked)" type="checkbox"  />
                                                <div className="slider round"></div>
                                            </label>
                                        </center>
                                    </div>
                                    <div className="col-6">
                                        <center>
                                            <img src="https://maxcdn.icons8.com/iOS7/PNG/100/Household/air_conditioner-100.png" title="Air Conditioner" width="100" />
                                            <h4>เครื่องปรับอากาศ</h4><br />
                                            <label className="switch" id="Airone1R2" >
                                                <input id="a" onclick={() => addArr(3)} type="checkbox" /><div className="slider round"></div>
                                            </label><br />
                                            <label className="switch" id="Airone2R2">
                                                <input onclick={() => addArr(4)} type="checkbox" /><div className="slider round"></div>
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