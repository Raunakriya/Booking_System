import React, { useState } from 'react';
import homeImg from '../../assets/home.jpg'
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        setSubmitted(true);
        // Handle form submission logic here
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container col-lg-12 d-flex">
            <div className="col-lg-6">
                <img src={homeImg} className="float-left" alt="logo" />
            </div>
            <div className="row col-lg-6">
                <div className="col-md-12 mt-6">
                    <div className="log col-sm-12">
                        <h3 className="font-weight-light">Log In</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row col-md-12 d-flex">
                            <div className="col-sm-6" id="kop">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="text"
                                    className={`form-control ${submitted && !email && 'is-invalid'}`}
                                    placeholder="Email"
                                    aria-label="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className=" col-sm-6 " id="col90">
                                <label htmlFor="password">Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className={`form-control ${submitted && !password && 'is-invalid'}`}
                                    placeholder="8 character"
                                    aria-label="Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span className="eyeicon col-xs-1 2mt-6" onClick={togglePasswordVisibility}>
                                    <i className={showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                                </span>
                            </div>
                        </div>
                        <div className="form-group row col-xs-6 col-md-3" id="row1">
                            <div className="col-sm-1 "></div>

                        </div>
                        <div className="col-sm-12 text-center">
                            <a className="small" href="/forgot-password">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="form-group text-center col-sm-12">
                            <button className="btn btn" id="butto" type="submit">
                                Log In
                            </button>
                        </div>
                        <div id="error-message"></div>
                    </form>
                    <div className="col-xs-12" id="ma">
                        <a href="/register" style={{ display: 'inline-flex' }}>
                            New User?<h6 className="ml-1"> Create an account</h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
