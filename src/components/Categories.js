import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
  return (
    <div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/movies">Movies</Link></li>
          <li><Link className="dropdown-item" to="/automobile">Automobile</Link></li>
          <li><Link className="dropdown-item" to="/miscellaneous">Miscellaneous</Link></li>
          <li><Link className="dropdown-item" to="/startup">Startup</Link></li>
          <li><Link className="dropdown-item" to="/startup">Politics</Link></li>
        </ul>
      </div>
    </div>
  );
}
