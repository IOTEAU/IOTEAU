import React, { Component } from "react";
// import { Graph } from '../Component/Graph'
import $ from "jquery";
import { dbFirebase } from "../Config/connectFirebase";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";
import "../Queue.js";

// การเรียกค่า
function goBack() {
  $("#idS101").css({ display: "none" });
  $("#idS102").css({ display: "none" });
  $("#idS103").css({ display: "none" });
  $("#idS104").css({ display: "none" });
  $("#allRoom").css({ display: "block" });
}
// ประกาศตัวแปร
var numPerple = dbFirebase.ref("room1/UserinRoom");
var numPerples = numPerple.on("value", function (snapshot) {
  // console.log("Airtwo:" + snapshot.val());
  var snap = snapshot.val();
  var num0 = 0;
  var LED;
  var AIR;
  // เงื่อนไขในการทำงานของระบบไฟ
  if (snap <= num0) {
    LED = $("#button").css({ display: "block" });
    //S LED //
    LED[0];
    AIR = $("#button1").css({ display: "none" });
    //S AIR //
    AIR[0];
  } else {
    LED = $("#button").css({ display: "none" });
    //S101 LED //testSensor
    LED[0];

    AIR = $("#button1").css({ display: "block" });
    //S101 LED //
    AIR[0];
  }

  // การทำงานของ S101
  $("#userinRoomS101").text(snap);
});
var change = 0;
var upnum = 0;
var snap = 0;
function Light_Row_one() {
  upnum += 1;
  var numPerple = dbFirebase.ref("room1/UserinRoom");
  var numPerples = numPerple.set((upnum), function (snapshot) {

    // var snap = snapshot.val();
    if (upnum == 0) {
      upnum == 0
    }
    if (upnum == 1) {
      snap >= 1
    }
    if (upnum == 2) {
      upnum -= 0;
    }
    console.log('upnum: ' + upnum);
    // console.log("Airtwo:" +snap);
  });
}

var numPerple1 = dbFirebase.ref("room1/UserinRoom");
var numPerples = numPerple1.on("value", function (snapshot) {
  document.querySelector("#Light_Row_one > input").checked = snapshot.val();
  $('#Light_Row_one').click(function() {
    numPerples = numPerple1.set('0',function() {
      
    })
  })

  



  
});
  
var numPerple2 = dbFirebase.ref("room2/UserinRoom");
  var numPerples2 = numPerple2.on("value", function (snapshot) {
    document.querySelector("#Light_Row_one1 > input").checked = snapshot.val();
    $('#Light_Row_one1').click(function() {
      numPerples2 = numPerple2.set('0',function() {
        
      })
    })
    

  });


// การทำงานระบบไฟฟ้าและแอร์ ในห้อง S101
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
                <div id="container" />
              </center>
            </div>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <center>
                      <img
                        src="https://maxcdn.icons8.com/iOS7/PNG/100/Very_Basic/idea-100.png"
                        title="Idea"
                        width="100"
                      />
                      <h4>แสงสว่าง</h4>
                      <br />
                      <label className="switch" id="Light_Row_one">
                        <input onClick='Light_Row_one.set(+this.checked)' type="checkbox" />
                        <div className="slider round"></div>
                      </label>
                    </center>
                  </div>
                  <div className="col-6">
                    <center>
                      <img
                        src="https://maxcdn.icons8.com/iOS7/PNG/100/Household/air_conditioner-100.png"
                        title="Air Conditioner"
                        width="100"
                      />
                      <h4>เครื่องปรับอากาศ</h4>
                      <br />
                      <label className="switch" id="Airone">
                        <input onClick={() => addArr(1)} type="checkbox" />
                        <div className="slider round" />
                      </label>
                      <br />
                      <label className="switch" id="Airone">
                        <input onClick={() => addArr(2)} type="checkbox" />
                        <div className="slider round" />
                      </label>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// การทำงานระบบไฟฟ้าและแอร์ ในห้อง S102
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
                <div id="container" />
              </center>
            </div>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <center>
                      <img
                        src="https://maxcdn.icons8.com/iOS7/PNG/100/Very_Basic/idea-100.png"
                        title="Idea"
                        width="100"
                      />
                      <h4>แสงสว่าง</h4>
                      <br />
                      <label className="switch" id="Light_Row_one1">
                        <input
                          onclick="Light_Row_one1.set(+this.checked)"
                          type="checkbox"
                        />
                        <div className="slider round" />
                      </label>
                    </center>
                  </div>
                  <div className="col-6">
                    <center>
                      <img
                        src="https://maxcdn.icons8.com/iOS7/PNG/100/Household/air_conditioner-100.png"
                        title="Air Conditioner"
                        width="100"
                      />
                      <h4>เครื่องปรับอากาศ</h4>
                      <br />
                      <label className="switch" id="Airone">
                        <input onClick={() => addArr(3)} type="checkbox" />
                        <div className="slider round" />
                      </label>
                      <br />
                      <label className="switch" id="Airone">
                        <input onClick={() => addArr(4)} type="checkbox" />
                        <div className="slider round" />
                      </label>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


      var queu = [];

<<<<<<< HEAD
        function addArr(num) {
            var status = true;
=======

// การกำหนดตัวแปรของแอร์
   var upToFirebaseRoom1Air2 = dbFirebase.ref("room1/air1")
   var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")
   var upToFirebaseRoom2Air1 = dbFirebase.ref("room2/air")
   var upToFirebaseRoom2Air2 = dbFirebase.ref("room2/air1")

  
>>>>>>> ea88f22357b42f0cc27f3f9c3783fa73055b3fcc



            if (queu.length < 2) {
                queu.push(num)
            } else {
                outQueue()
            }

            console.log(queu)
            console.log(queu.length)


        }

        function outQueue() {

<<<<<<< HEAD
          var upToFirebaseRoom1Air2 = dbFirebase.ref("room1/air1")
          var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")
          var upToFirebaseRoom2Air1 = dbFirebase.ref("room2/air")
          var upToFirebaseRoom2Air2 = dbFirebase.ref("room2/air1")
       
            setInterval(() => {
                var dataOutQueue = queu.shift()
                if (dataOutQueue == 1) {
                  upToFirebaseRoom1Air1.set(dataOutQueue)
                } else if(dataOutQueue == 2){
                  upToFirebaseRoom1Air2.set(dataOutQueue)
                }else if(dataOutQueue == 3){
                  upToFirebaseRoom2Air1.set(dataOutQueue)
                }else if(dataOutQueue == 4){
                  upToFirebaseRoom2Air2.set(dataOutQueue)
                }
=======
// เงื่อนไขในการเช็คค่า
    if(i == 2){
      var gg =stac[0] 
      if (gg == 1) {
        upToFirebaseRoom1Air1.set(gg)
      }else if(gg == 2){
        upToFirebaseRoom1Air2.set(gg)
      }else if(gg == 3){
        upToFirebaseRoom2Air1.set(gg)
      }else if (gg == 4) {
        upToFirebaseRoom2Air2.set(gg)
    
      }
      
    }
    if(i == 7){
      var gg =stac[1] 
      if (gg == 1) {
        upToFirebaseRoom1Air1.set(gg)
      }else if(gg == 2){
        upToFirebaseRoom1Air2.set(gg)
      }else if(gg == 3){
        upToFirebaseRoom2Air1.set(gg)
      }else if (gg == 4) {
        upToFirebaseRoom2Air2.set(gg)
    
      }
    }
    if(i == 12){
      var gg =stac[2] 
      if (gg == 1) {
        upToFirebaseRoom1Air1.set(gg)
      }else if(gg == 2){
        upToFirebaseRoom1Air2.set(gg)
      }else if(gg == 3){
        upToFirebaseRoom2Air1.set(gg)
      }else if (gg == 4) {
        upToFirebaseRoom2Air2.set(gg)
    
      }
    }
    if(i == 17){
      var gg =stac[3] 
      if (gg == 1) {
        upToFirebaseRoom1Air1.set(gg)
      }else if(gg == 2){
        upToFirebaseRoom1Air2.set(gg)
      }else if(gg == 3){
        upToFirebaseRoom2Air1.set(gg)
      }else if (gg == 4) {
        upToFirebaseRoom2Air2.set(gg)
    
      }
    }
  }, 2000);
>>>>>>> ea88f22357b42f0cc27f3f9c3783fa73055b3fcc

                console.log(dataOutQueue)
            }, 5000)
        }

 
   