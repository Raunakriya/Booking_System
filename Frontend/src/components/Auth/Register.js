import React, { useState } from 'react';

function RegisterForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  const handleCheckboxChange = (checked) => {
    setTermsAccepted(checked);
  };

  return (
    <div className="row mr-0" id="con">
      <div className="col-lg-5">
        <span className="tag-line">An effective tool for<br /> advertising with WhatsApp</span>
        <img src="assets/img/img-reg.png" className="float-left" alt="logo" />
        <span className="copyright-text">&copy;Copyright 2023</span>
      </div>
      <div className="col-lg-7 register-cip">
        <div className="log">
          <h3 className="font-weight-light">Create Your Account</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Name & Phone Number */}
            <div className="name-number">
              <div className={`invalid-input ${submitted && !name && 'is-invalid'}`}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="City"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength="30"
                  required
                />
              </div>
              <div className="pp" id="col">
                <label htmlFor="phoneNumber" id="la-ph">Phone Number</label>
                <div className="ss d-flex justify-content-start">
                  <input
                    type="text"
                    className="form-control"
                    id="mobile_number"
                    placeholder="Phone Number"
                    aria-label="City"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    pattern="^[^+\-.,?*%$eE]+$"
                    onKeyDown={(e) => /^[0-9]$/.test(e.key)}
                    required
                  />
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="you-em">
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  className={`form-control ${submitted && !email && 'is-invalid'}`}
                  id="gem"
                  placeholder="Email"
                  aria-label="City"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* Password & Confirm Password */}
            <div className="password-confirm">
              <div className="col-6 pl-0 pr-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control password pass-contol ${submitted && !password && 'is-invalid'}`}
                  placeholder="8 character"
                  aria-label="City"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="col-6 pl-1 pr-0" id="kop">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className={`form-control confirm pass-contol ${submitted && !confirmPassword && 'is-invalid'}`}
                  placeholder="8 character"
                  aria-label="State"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* Terms & Remember Me */}
            <div className="form-group row">
              <div className=""></div>
              <div className="custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="custom-control-input1"
                  checked={termsAccepted}
                  onChange={(e) => handleCheckboxChange(e.target.checked)}
                  required
                />
                <label className="custom-control-label" htmlFor="custom-control-input1">
                  I accept the <a href="https://engagekart.com/terms-and-conditions/" target="_blank">Terms & Conditions</a>
                </label>
              </div>
              <div className="checkbox2" id="chbo">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="custom-control-input2"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="custom-control-label" htmlFor="custom-control-input2">Remember Me</label>
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <div className="form row">
              <div className="col-sm-3"></div>
              <button
                className="btn btn2"
                disabled={!termsAccepted}
                style={{ backgroundColor: buttonColor, opacity: termsAccepted ? 1 : 0.5 }}
                type="submit"
              >
                Next
              </button>
            </div>
          </form>
          {/* Error Messages */}
          <div className="text-danger">
            {submitted && !name && <div>Name is required.</div>}
            {/* Add more error messages for other fields as needed */}
          </div>
        </div>
      </div>
      {/* Sign In Link */}
      <div className="col-md-12 d-flex" id="sigal">
        <div className="d-flex text-left">
          <a href="/login" style={{ display: 'inline-flex' }}>Already member?<h6 className="mi"> Sign In</h6></a>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
