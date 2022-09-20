import React from "react"
import "./registration.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {Link} from 'react-router-dom'

export default function Registration() {

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Submitted for Registration.");
    }
    return(
        <div class="wrapper">
        
        <form onSubmit={handleSubmit}>
            <div class="h5 font-weight-bold text-center mb-3">Registration</div>
            <div class="form-group d-flex align-items-center">
                <div class="icon"><span class="far fa-user"></span></div>
                <input autocomplete="off" type="text" class="form-control" placeholder="Name" />
            </div>

            <div class="form-group d-flex align-items-center">
                <div class="icon"><span class="far fa-envelope"></span></div>
                <input autocomplete="off" type="email" class="form-control" placeholder="Email" />
            </div>

            <div class="form-group d-flex align-items-center">
                <div class="icon"><span class="fas fa-phone"></span></div>
                <input autocomplete="off" type="tel" class="form-control" placeholder="Phone Number" />
            </div>

            <div class="form-group d-flex align-items-center">
                <div class="icon"><span class="fas fa-map-marker-alt"></span></div>
                <input autocomplete="off" type="text" class="form-control" placeholder="Address" />
            </div>
            <div class="form-group d-flex align-items-center">
                <div class="icon"><span class="fas fa-map-marker-alt"></span></div>
                <input autocomplete="off" type="text" class="form-control" placeholder="Citizenship ID" />
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

            <div class="btn btn-primary mb-3">Signup</div>

            <div class="terms mb-2">
                By clicking "Signup", you acknowledge that you have read the
                <a href="#"> Privacy Policy</a> and agree to the
                <a href="#"> Terms of Service</a>.
            </div>
            <div class=" border-bottom mt-4 mb-4"></div>
            <div class="terms mb-2">
                Already Have an Account? <div class="btn btn-primary mb-3">
                    <Link to='/login'>Login</Link>
                    </div>
            </div>
        </form>
    </div>

    );

}
