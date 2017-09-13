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
//จำนวนคน s101
var numPerple = dbFirebase.ref("room1/UserinRoom");
var numPerples = numPerple.on("value", function (snapshot) {

  var snap = snapshot.val();
  var num0 = 0;
  var LED;
  var AIR;

  if (snap <= num0) {
    LED = $("#button").css({ display: "block" });
   
    LED[0];
    AIR = $("#button1").css({ display: "none" });
  
    AIR[0];
  } else {
    LED = $("#button").css({ display: "none" });
  
    LED[0];

    AIR = $("#button1").css({ display: "block" });
 
    AIR[0];
  }
  $("#userinRoomS101").text(snap);
});

//จำนวนคนs102//
var numPerple = dbFirebase.ref("room2/UserinRoom");
var numPerples = numPerple.on("value", function (snapshot) {

  var snap = snapshot.val();
  var num0 = 0;
  var LED;
  var AIR;
  // เงื่อนไขในการทำงานของระบบไฟ
  if (snap <= num0) {
    LED = $("s102button").css({ display: "block" });
    //S LED //
    LED[0];
    AIR = $("s102button1").css({ display: "none" });
    //S AIR //
    AIR[0];
  } else {
    LED = $("s102button").css({ display: "none" });
    //S101 LED //testSensor
    LED[0];

    AIR = $("s102button1").css({ display: "block" });
    //S101 LED //
    AIR[0];
  }
  $("#userinRoomS102").text(snap);
});



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

        function addArr(num) {
            // var status = true;



            if (queu.length < 2) {


                queu.push(num)

            } if (queu.length ==2 ) {

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
                } else if(dataOutQueue == 2){
                  upToFirebaseRoom1Air2.set(dataOutQueue)
                }else if(dataOutQueue == 3){
                  upToFirebaseRoom2Air1.set(dataOutQueue)
                }else if(dataOutQueue == 4){
                  upToFirebaseRoom2Air2.set(dataOutQueue)
                }

                console.log(dataOutQueue)
            }, 5000)
        }

 
   