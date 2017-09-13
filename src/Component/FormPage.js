import React, { Component } from 'react'
import $ from 'jquery'
import { dbFirebase } from '../Config/connectFirebase'
import RoomPage from '../Component/RoomPage'
import 'bootstrap/dist/css/bootstrap.css';

// การประกาศตัวแปร
var numPerple = dbFirebase.ref('room1/UserinRoom');
var numPerples = numPerple.on('value', function (snapshot) {

    // console.log("Airtwo:" + snapshot.val());
    // ประกาศตัวแปร
    var snap = snapshot.val();
    var num0 = 0;
    var LED;
    // เงื่อนไขในการทำงาน
    if (snap <= num0) {
        LED = $("#button").css({ display: 'block' });
        //S LED //
        LED[0];
    } else {
        LED = $("#button").css({ display: 'none' });
        //S101 LED //testSensor
        LED[0];
    }
    $('#userinRoomS101').text(snap);
    
});



var numair = dbFirebase.ref('room1/air');
var numair = numair.on('value',function(snapshot){
var numair = snapshot.val();   
var air0 = 0;
var AIR;
if (numair <= air0){
   AIR = $("#button").css({display:'block'});
   AIR[1];
  }else{
    AIR = $("#button1").css({display:'none'});
    AIR[1];
  }

});

//รับค่า userroom2//
var numPerple1 = dbFirebase.ref('room2/UserinRoom');
var numPerples1 = numPerple1.on('value', function (snapshot) {
    $('#userinRoomS102').text(snapshot.val());

});
//random เข้า Firebase
// var num = dbFirebase.ref('num');
// setInterval(function() {
//     num.push(Math.random() * 100)
// }, 1000)



// ห้อง S101
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


var numPerple2 = dbFirebase.ref('room2/UserinRoom');
var numPerples2 = numPerple2.on('value', function (snapshot) {

    // console.log("Airtwo:" + snapshot.val());
    // ประกาศตัวแปร
    var snap = snapshot.val();
    var num0 = 0;
    var LED;
    // เงื่อนไขการทำงานของระบบ
    if (snap <= num0) {
        LED = $("#s102button").css({ display: 'block' });
        //S LED //
        AIR[0];
    } else {
        LED = $("#s102button").css({ display: 'none' });
        //S101 LED //testSensor
        LED[0];
    }

    $('#userinRoomS102').text(snap);
});

// ห้อง S102
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
                                <button id="s102button"></button>
                                <button id="s102button1" style={{ display: 'none' }}></button>
                            </div>
                            <br></br>
                            <h4>เครื่องปรับอากาศ </h4>
                            <div>
                                <button id="s102button"></button>
                                <button id="s102button1" style={{ display: 'none' }}></button>
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














// ห้อง S103
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

// ห้อง S104
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
