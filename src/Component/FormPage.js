import React, { Component } from 'react'
import $ from 'jquery'
import { dbFirebase } from '../Config/connectFirebase'
import RoomPage from '../Component/RoomPage'
import 'bootstrap/dist/css/bootstrap.css';

var numPerple = dbFirebase.ref('UserinRoom');
var numPerples = numPerple.on('value', function (snapshot) {

    // console.log("Airtwo:" + snapshot.val());
    var snap = snapshot.val();
    var num0 = 0;
    var LED
    var AIR
    if (snap <= num0) {
        LED = $("#button").css({ display: 'block' });
        //S LED //
        LED[0];

        AIR = $("#button1").css({ display: 'none' });
        //S AIR //
        AIR[0];
    } else {
        LED = $("#button").css({ display: 'none' });
        //S101 LED //testSensor
        LED[0];

        AIR = $("#button1").css({ display: "block" });
        //S101 LED //
        AIR[0];
    }

    $('#userinRoomS101').text(snap);
});

var numPerple1 = dbFirebase.ref('air');
var numPerples = numPerple1.on('value', function (snapshot) {
    var snap1 = snapshot.val();
    var num1 = 0
    var AIRS101
    if (snap1 <= num1) {
        AIRS101 = $("#button").css({ display: "block" });
        AIRS101[1];

        AIRS101 = $("#button1").css({ display: 'none' });
        //S AIRS101 //
        AIRS101[1];
    } else {
        AIRS101 = $("#button").css({ display: 'none' });
        //S101 AIRS101 //testSensor
        AIRS101[1];

        AIRS101 = $("#button1").css({ display: "block" });
        //S101 LED //
        AIRS101[1];
    }
});

//random เข้า Firebase
// var num = dbFirebase.ref('num');
// setInterval(function() {
//     num.push(Math.random() * 100)
// }, 1000)




export var S101 = React.createClass({
    render: function () {
        return (
            <div>
                <div className="col-md-12">
                    <div className="well">
                        <center>
                            <h4>S101</h4>
                            <hr />
                            <h4>แสงสว่าง</h4>
                            <div>
                                <button id="button"></button>
                                <button id="button1" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>เครื่องปรับอากาศ </h4>
                            <div>
                                <button id="button"></button>
                                <button id="button1" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>จำนวนคน <p id="userinRoomS101">0</p></h4>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
});

export var S102 = React.createClass({
    render: function () {
        return (
            <div>
                <div className="col-md-12">
                    <div className="well">
                        <center>
                            <h4>S102</h4>
                            <hr />
                            <h4>แสงสว่าง</h4>
                            <div>
                                <button id="button"></button>
                                <button id="button1" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>เครื่องปรับอากาศ </h4>
                            <div>
                                <button id="button"></button>
                                <button id="button1" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>จำนวนคน <p id="userinRoomS102">0</p></h4>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
});

export var S103 = React.createClass({
    render: function () {
        return (
            <div>
                <div className="col-md-12">
                    <div className="well">
                        <center>
                            <h4>S103</h4>
                            <hr />
                            <h4>แสงสว่าง</h4>
                            <div>
                                <button id="button"></button>
                                <button id="button1" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>เครื่องปรับอากาศ </h4>
                            <div>
                                <button id="button"></button>
                                <button id="button1" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>จำนวนคน <p id="userinRoomS103">0</p></h4>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
});

export var S104 = React.createClass({
    render: function () {
        return (
            <div>
                <div className="col-md-12">
                    <div className="well">
                        <center>
                            <h4>S104</h4>
                            <hr />
                            <h4>แสงสว่าง</h4>
                            <div>
                                <button id="button"></button>
                                <button id="button1" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>เครื่องปรับอากาศ </h4>
                            <div>
                                <button id="button"></button>
                                <button id="button1" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>จำนวนคน <p id="userinRoomS104">0</p></h4>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
});