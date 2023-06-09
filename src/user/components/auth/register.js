/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
    const [first_name, first_name_change] = useState('JEEDIEx');
    const [last_name, last_name_change] = useState('JIDEx');
    const [phone, phoneChange] = useState('255625460123');
    const [email, emailChange] = useState('enock@jeedie.co.tz');
    const [password, passwordChange] = useState('J33diem23');
    const [role, roleChange] = useState('');
    const navigate = useNavigate();

    const roles = [
        { "id": "admin" },
        { "id": "student" },
        { "id": "teacher" }
    ];
    let _validate$ = false;

    const register = (e) => {
        e.preventDefault();
        // _validator();
        const registerForm = { first_name, last_name, phone, email, password, role };
        // if (_validate$) {
        fetch("http://localhost:8000/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(registerForm)
        }).then(res => {
            toast.success('User Registered Successfully');
            navigate('/user/login');
        }).catch((err) => {
            console.log(err.message)
        });
        // } else {
        //     toast.warning('Please Enter Valid Data');
        // }
    }
    const _validateEmail = (email_value) => {
        if (/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/.test(email_value)) {

        } else {
            toast.warning('Email not valid');
        }
    }
    const _validator = () => {
        if (first_name.length === 0) {
            _validate$ = false;
        }
        if (last_name.length === 0) {
            _validate$ = false;
        }
        if (phone.length === 0) {
            _validate$ = false;
        }
        if (email.length === 0) {
            _validate$ = false;
        }
        //  else {
        //     if (/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/.test(email)) {

        //     } else {
        //         _validate$ = false;
        //     }
        // }
        if (password.length === 0) {
            _validate$ = false;
        }
    }
    return (
        <div class="container col-md-8 mt-5">
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                        <li class="nav-item">
                            <Link style={{ float: 'right' }} class="nav-link active" to={"/"}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={0}>Quick Link</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Register</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Sign Up Form</h5>
                    <form class="text-center" onSubmit={register}>
                        <div class="row">
                            <div class="col">
                                <label>First name <span className="text-danger">*</span></label>
                                <input type="text" value={first_name} onChange={e => first_name_change(e.target.value)} class="form-control" placeholder="First name"></input>
                            </div>
                            <div class="col">
                                <label>Last name <span className="text-danger">*</span></label>
                                <input type="text" value={last_name} onChange={e => last_name_change(e.target.value)} class="form-control" placeholder="Last name"></input>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <label>Phone Number<span className="text-danger">*</span></label>
                                <input type="number" value={phone} onChange={e => phoneChange(e.target.value)} class="form-control" placeholder="Phone"></input>
                            </div>
                            <div class="col">
                                <label>Email<span className="text-danger">*</span></label>
                                <input type="email" onBlur={e => _validateEmail(e.target.value)} value={email} onChange={e => emailChange(e.target.value)} class="form-control" placeholder="Email"></input>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <label>Password<span className="text-danger">*</span></label>
                                <input type="password" value={password} onChange={e => passwordChange(e.target.value)} class="form-control" placeholder="Password"></input>
                            </div>
                            <div class="col mt-4">
                                <div class="input-group mb-3">
                                    <label class="input-group-text" for="inputGroupSelect01">Roles</label>
                                    <select value={role} onChange={e => roleChange(e.target.value)} class="form-select" id="inputGroupSelect01">
                                        <option selected>Select role</option>
                                        {roles && roles.map((role) => (
                                            <option value={role.id} key={role.id}>{role.id}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer mt-3">
                            <span>Already registered? <Link to='/user/login'>Sign In here</Link></span>
                            <button type="submit" class="btn btn-primary float-end">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;