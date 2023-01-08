import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="bg-con">
    <img
      alt="wave"
      className="wave-logo"
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
    />
    <h1 className="logo-head">Wave</h1>
    <ul className="inner-div">
      <li className="list-item">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
