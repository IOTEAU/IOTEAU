import React, { Component } from 'react'
import $ from 'jquery'
import { dbFirebase } from '../Config/connectFirebase'
import RoomPage from '../Component/RoomPage'
import 'bootstrap/dist/css/bootstrap.css';
import "../index.css";
// การประกาศตัวแปร


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
// export var S103 = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <div className="col-md-12">
//                     <div className="well">
//                         <center>
//                             <h4>S103</h4>
//                             <hr />
//                             <h4>แสงสว่าง</h4>
//                             <div>
//                                 <button id="button"></button>
//                                 <button id="button1" style={{ display: 'none' }}></button>
//                             </div>
//                             <br></br>
//                             <h4>เครื่องปรับอากาศ </h4>
//                             <div>
//                                 <button id="button"></button>
//                                 <button id="button1" style={{ display: 'none' }}></button>
//                             </div>
//                             <br></br>
//                             <h4>จำนวนคน <p id="userinRoomS103">0</p></h4>
//                         </center>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// });

// // ห้อง S104
// export var S104 = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <div className="col-md-12">
//                     <div className="well">
//                         <center>
//                             <h4>S104</h4>
//                             <hr />
//                             <h4>แสงสว่าง</h4>
//                             <div>
//                                 <button id="button"></button>
//                                 <button id="button1" style={{ display: 'none' }}></button>
//                             </div>
//                             <br></br>
//                             <h4>เครื่องปรับอากาศ </h4>
//                             <div>
//                                 <button id="button"></button>
//                                 <button id="button1" style={{ display: 'none' }}></button>
//                             </div>
//                             <br></br>
//                             <h4>จำนวนคน <p id="userinRoomS104">0</p></h4>
//                         </center>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// });
