import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, initCSRF,registerUser} from '../Api';
import '../ModernLogin.css'; // external CSS file

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await initCSRF();
      const { data } = await loginUser({ email, password });
      alert(data.message);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed. Check credentials or try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
          alt="Login Illustration"
          className="login-image"
        />
          <div className="image-overlay"></div>
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button className="login-btn" type="submit">LOGIN</button>

          <p className="register-text">
            New here? <a href="/register">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
