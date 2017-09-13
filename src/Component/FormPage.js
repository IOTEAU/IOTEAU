import React, { Component } from 'react'
import $ from 'jquery'
import { dbFirebase } from '../Config/connectFirebase'
import RoomPage from '../Component/RoomPage'
import 'bootstrap/dist/css/bootstrap.css';



export var S101 = React.createClass({
    componentDidMount() {

        var numLEDR1 = dbFirebase.ref('room1/UserinRoom');
        var numLEDR1s = numLEDR1.on('value', function (snapshot) {

            var snapLEDR1 = snapshot.val();
            var num = 0;
            var LED;
            if (snapLEDR1 == num) {
                $("#btn-LED-R1").addClass('btn-off');
                $("#btn-LED-R1").removeClass('btn-on');

            } else {
                $("#btn-LED-R1").addClass('btn-on');
                $("#btn-LED-R1").removeClass('btn-off');

            }
            console.log('R1S101_LED:' + snapLEDR1)
            $('#userinRoomS101').text(snapLEDR1);
        });

        var numAIR0R1 = dbFirebase.ref('room1/air');
        var numAIR0R1s = numAIR0R1.on('value', function (snapshot) {
            var snapAIR0R1 = snapshot.val();
            var num = 0
            var AIR;
            if (snapAIR0R1 == num) {
                $("#btn-AIR1-R1").addClass('btn-off');
                $("#btn-AIR1-R1").removeClass('btn-on');
            } else {
                $("#btn-AIR1-R1").addClass('btn-on');
                $("#btn-AIR1-R1").removeClass('btn-off');
            }
            console.log('R1S101_AIR1:' + snapAIR0R1)
        });

        var numAIR1R1 = dbFirebase.ref('room1/air1');
        var numAIR1R1s = numAIR1R1.on('value', function (snapshot) {
            var snapAIR1R1 = snapshot.val();
            var num = 0
            var AIR;
            if (snapAIR1R1 == num) {
                $("#btn-AIR2-R1").addClass('btn-off');
                $("#btn-AIR2-R1").removeClass('btn-on');
            } else {
                $("#btn-AIR2-R1").addClass('btn-on');
                $("#btn-AIR2-R1").removeClass('btn-off');
            }
            console.log('R1S101_AIR2:' + snapAIR1R1)
        });
    },
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
                                <button id="btn-LED-R1" className="btn-off"></button>
                            </div>
                            <br></br>
                            <h4>เครื่องปรับอากาศ </h4>
                            <div>
                                <button id="btn-AIR1-R1" className="btn-off"></button>
                                <button id="btn-AIR2-R1" className="btn-off"></button>
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
    componentDidMount() {
        var numLEDR2 = dbFirebase.ref('room2/UserinRoom');
        var numLEDR2s = numLEDR2.on('value', function (snapshot) {

            var snapLEDR2 = snapshot.val();
            var num = 0;
            var LED
            if (snapLEDR2 == num) {
                $("#btn-LED-R2").addClass('btn-off');
                $("#btn-LED-R2").removeClass('btn-on');

            } else {
                $("#btn-LED-R2").addClass('btn-on');
                $("#btn-LED-R2").removeClass('btn-off');

            }
            console.log('R1S102_LED:' + snapLEDR2)
            $('#userinRoomS102').text(snapLEDR2);
        });

        var numAIR0R2 = dbFirebase.ref('room2/air');
        var numAIR0R2s = numAIR0R2.on('value', function (snapshot) {
            var snapAIR0R2 = snapshot.val();
            var num = 0
            var AIR;
            if (snapAIR0R2 == num) {
                $("#btn-AIR1-R2").addClass('btn-off');
                $("#btn-AIR1-R2").removeClass('btn-on');
            } else {
                $("#btn-AIR1-R2").addClass('btn-on');
                $("#btn-AIR1-R2").removeClass('btn-off');
            }
            console.log('R1S102_AIR1:' + snapAIR0R2)
        });

        var numAIR1R2 = dbFirebase.ref('room2/air1');
        var numAIR1R2s = numAIR1R2.on('value', function (snapshot) {
            var snapAIR1R2 = snapshot.val();
            var num = 0
            var AIR;
            if (snapAIR1R2 == num) {
                $("#btn-AIR2-R2").addClass('btn-off');
                $("#btn-AIR2-R2").removeClass('btn-on');
            } else {
                $("#btn-AIR2-R2").addClass('btn-on');
                $("#btn-AIR2-R2").removeClass('btn-off');
            }
            console.log('R1S102_AIR2:' + snapAIR1R2)
        });
    },
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
                                <button id="btn-LED-R2" className="btn-off"></button>
                            </div>
                            <br></br>
                            <h4>เครื่องปรับอากาศ </h4>
                            <div>
                                <button id="btn-AIR1-R2" className="btn-off"></button>
                                <button id="btn-AIR2-R2" className="btn-off"></button>
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
                                <button id="btn-LED-off"></button>
                                <button id="btn-LED-on" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>เครื่องปรับอากาศ </h4>
                            <div>
                                <button id="btn-AIR-off"></button>
                                <button id="btn-AIR-on" style={{ display: 'none' }}></button>
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
                                <button id="btn-LED-off"></button>
                                <button id="btn-LED-on" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>เครื่องปรับอากาศ </h4>
                            <div>
                                <button id="btn-AIR-off"></button>
                                <button id="btn-AIR-on" style={{ display: 'none' }}></button>
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

