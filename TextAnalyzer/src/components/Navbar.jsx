import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
// import TextForm from './TextForm';
import { Link } from "react-router-dom";

// import { Link } from '@react-navigation/native';

 export default function Navbar(props) {
  
    
  return(
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className='nav-link'>About</Link>
          </li>
        </ul>
              <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" onClick={props.colors.JapaneseIndigo} className="btn btn-secondary mx-1">Indigo</button>
        <button type="button" onClick={props.colors.Green} className="btn btn-success mx-1">Green</button>
      </div>
                <div className={`form-check form-switch mx-2 text-${props.mode===`dark`}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </div>
    </nav>  
)

}
Navbar.propTypes= {title:PropTypes.string.isRequired} //.isRequired makes a prop mandatory 
Navbar.defaultProps={
  title:'Set title'
};