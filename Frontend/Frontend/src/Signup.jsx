import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import axios from "axios";


/**
 * Signup component
 *
 * Props:
 * - onSignup: function(data) called on successful signup
 * - submitUrl: optional URL to post signup data (defaults to /api/signup)
 * - onSwitchToLogin: optional callback to switch UI back to login view
 */
export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null);


  const resetErrors = () => {
    setErrors({});
    setServerError("");
  };

  const navigate =useNavigate()

  const handlenav=(path)=>{
    navigate(path)

  }

  const validate = () => {
    const e = {};
    if (!fullName.trim()) e.fullName = "Full name is required.";
    if (!email) e.email = "Email is required.";
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) e.email = "Enter a valid email address.";
    }

    if (!password) e.password = "Password is required.";
    else if (password.length < 8)
      e.password = "Password must be at least 8 characters.";

    if (!confirm) e.confirm = "Please confirm your password.";
    else if (password !== confirm) e.confirm = "Passwords do not match.";

    if (!agree) e.agree = "You must accept the terms to continue.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const createUser= async()=>{ 
    const em = document.getElementById('email').value;
    const pass =document.getElementById('password').value;
    const fn = document.getElementById('fullName').value;
    try{
      const create = await axios.post('/create',{fullName:fn,email:em,password:pass})

    }
    catch(err){
      console.log(err)
    }
    


  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    resetErrors();

    if (!validate()) {
      // focus first invalid
      if (errors.fullName) nameRef.current?.focus();
      return;
    }

    setLoading(true);
    setServerError("");

    

  };

  return (
    <div className="login-wrapper" aria-live="polite">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <h1 className="login-title">Create an account</h1>

       

        <label className="login-label" htmlFor="fullName">
          Full name
          <input
            id="fullName"
            ref={nameRef}
            className={`login-input ${errors.fullName ? "invalid" : ""} color:black`}
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jane Doe"
            autoComplete="name"
            aria-invalid={errors.fullName ? "true" : "false"}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            disabled={loading}
          />
        </label>
        {errors.fullName && <div id="fullName-error" className="field-error">{errors.fullName}</div>}

        

        <label className="login-label" htmlFor="email">
          Email
          <input
            id="email"
            className={`login-input ${errors.email ? "invalid" : ""}`}
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
           
            
          />
        </label>
        {errors.email && <div id="email-error" className="field-error">{errors.email}</div>}

        <label className="login-label" htmlFor="password">
          Password
          <div className="password-row">
            <input
              id="password"
              className={`login-input ${errors.password ? "invalid" : ""}`}
              type={showPassword ? "text" : "password"}
              placeholder="Choose a strong password"
              autoComplete="new-password"
            />
            <button
              type="button"
              className="show-password-btn"
              onClick={()=>{
                setShowPassword(!showPassword)
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </label>
        {errors.password && <div id="password-error" className="field-error">{errors.password}</div>}

        <label className="login-label" htmlFor="confirm">
          Confirm password
          <input
            id="confirm"
            className={`login-input ${errors.confirm ? "invalid" : ""}`}
            type={showPassword ? "text" : "password"}
           
            placeholder="Repeat your password"
            autoComplete="new-password"
          />
        </label>
        {errors.confirm && <div id="confirm-error" className="field-error">{errors.confirm}</div>}

        <label className="login-row remember-me" style={{ marginTop: 8 }}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            disabled={loading}
          />
          I agree to the terms and privacy policy
        </label>
        {errors.agree && <div className="field-error">{errors.agree}</div>}

        <button
          type="submit"
          className="login-btn"
          disabled={loading}
          aria-busy={loading}
          onClick={createUser}
        >
          {loading ? "Creating account..." : "Create account"}
        </button>

        <div className="signup-note">
          Already have an account?{" "}
          <a onClick={()=>{handlenav('/Login')}}>Sign in</a>
        </div>
      </form>
    </div>
  );
}