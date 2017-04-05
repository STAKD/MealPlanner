import React from 'react';
import { Link } from 'react-router';

const Landing = props => (
  <div className="landing">
    <div className="logo-container">
      <img src="../assets/img/MEAP2w01.png" alt="logo" />
    </div>
    <div className="btn-container">
      <Link to="/login">
        <button>
          LOGIN
        </button>
      </Link>
    </div>
  </div>
);

export default Landing;
