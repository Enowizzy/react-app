/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
    const [email, emailChange] = useState('enock@jeedie.co.tz');
    const [password, passwordChange] = useState('J33diem23');
    const navigate = useNavigate();

    let _validate$ = false;

    const login = (e) => {
        e.preventDefault();
        _validator();
        // if (_validate$) {
            fetch("http://localhost:8000/users?email="+email+"&password="+password).then(res => {
                if (!res.ok) {
                    toast.error('Login Failed');  
                }
                return res.json();
            }).then((res) => {
                if (res.length>0) {
                    let user_obj=res[0];
                    localStorage.setItem('email', email)
                    localStorage.setItem('role', user_obj.role)
                    navigate('/');
                }else{
                    toast.error('Login Failed');  
                }
            });
        // } else {
        //     toast.warning('Please Enter Valid Data');
        // }
    }
    const _validateEmail = (email_value) => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email_value)) {
            _validate$ = true;
        } else {
            toast.warning('Email not valid');
        }
    }
    const _validator = () => {
        if (email.length === 0) {
            _validate$ = false;
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
                _validate$ = true;
            } else {
                _validate$ = false;
            }
        }
        if (password.length === 0) {
            _validate$ = false;
        }
    }
    return (
        <div class="container col-md-5 mt-5">
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                        <li class="nav-item">
                            <Link class="nav-link active" to={"/"}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={0}>Quick Link</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Login</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Sign In Form</h5>
                    <form class="text-center" onSubmit={login}>

                        <div class="row mt-3">
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
                        </div>
                        <div class="card-footer mt-3">
                            <button type="submit" class="btn btn-primary float-end">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;