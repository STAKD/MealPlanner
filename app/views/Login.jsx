import React from 'react';
import { Link } from 'react-router';

const Login = props => (
  <div className="login">
    <input type="text" placeholder="Email/Username" />
    <input type="password" placeholder="password" />
  </div>
);

export default Login;
