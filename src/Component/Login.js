import React, { Component } from 'react'
import { logIn, resetPassword } from '../Config/Authentication'
import 'bootstrap/dist/css/bootstrap.css'

function setErrorMsg(error) {
    return {
        loginMessage: error
    }
}
// การเช็คค่า Emil และ password ว่าตรงกับระบบที่ให้ ถ้าตรงให้เข้าสู่ระบบได้ ถ้าไม่ตรงก็ไม่ทำงาน
export default class Login extends Component {
    state = { loginMessage: null }
    handleSubmit = (e) => {
        e.preventDefault()
        logIn (this.email.value, this.pw.value)
            .catch((error) => {
                this.setState(setErrorMsg('Invalid username/password.'))
            })
    }
// ฟอร์ม หน้าเข้าสู่ระบบ
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" ref={(email) => this.email = email} placeholder="Email" />
                        </div>
                       <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>


        )
    }
}