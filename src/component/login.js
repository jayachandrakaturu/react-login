import React from "react";
import { withRouter } from 'react-router-dom';

function Login(props) {
    return (
        <div className="container">
            <h2>Login Form</h2>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
            <div className="form-group form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => props.history.push('/home')}>Submit</button>
        </div>
    )
}
export default withRouter(Login);