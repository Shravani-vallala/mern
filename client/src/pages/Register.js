import React, { useState } from 'react';
import { loginUser, initCSRF ,registerUser} from '../Api';
import '../Register.css'; // import external styles

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: ''
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPass) {
      alert('Passwords do not match');
      return;
    }

    try {
      await initCSRF();
      const { data } = await registerUser(form);
      alert(data.message || 'Registration successful');
    } catch (err) {
      alert('Registration failed. Please check input or try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img
         src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
          alt="Register Illustration"
          className="register-image"
        />
      </div>

      <div className="register-right">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPass"
              placeholder="Re-enter password"
              value={form.confirmPass}
              onChange={handleChange}
              required
            />
          </div>

          <button className="register-btn" type="submit">REGISTER</button>

          <p className="login-text">
            Already have an account? <a href="/signin">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
