import React from "react"
import "./login.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from 'react-router-dom'

export default function Login() {

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("You are Logged In.");
    }
    return(
        <div class="wrapper">
        
        <form onSubmit={handleSubmit}>
            <div class="h5 font-weight-bold text-center mb-3">Log In</div>
            
            <div class="form-group d-flex align-items-center">
                <div class="icon"><span class="far fa-envelope"></span></div>
                <input autocomplete="off" type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="form-group d-flex align-items-center">
                <div class="icon"><span class="fas fa-key"></span></div>
                <input autocomplete="off" type="password" class="form-control" placeholder="Password" />
                <div class="icon btn"><span class="fas fa-eye-slash"></span></div>
            </div>
            <div class="mb-2">
                <label class="option">Remember me
                    <input type="checkbox" checked />
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="btn btn-primary mb-3">Login</div>
            <div class=" border-bottom mt-4 mb-4"></div>
            <div class="terms mb-2">
                Doesnot Have an Account? <div class="btn btn-primary mb-3">
                    <Link to='/registration'>Signup</Link>
                    </div>
            </div>
            
        </form>
    </div>

    );

}
