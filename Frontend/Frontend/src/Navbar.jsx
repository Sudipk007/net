import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 // We'll create this for styling

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggleDropdown = () => {
    
      setDropdownOpen(!dropdownOpen);
      if(dropdownOpen2){
        setDropdownOpen2(!dropdownOpen2)
      }

    
    
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
    if(dropdownOpen){
      setDropdownOpen(!dropdownOpen)
    }
  };

  const toggleRest=()=>{
    if(dropdownOpen){
      setDropdownOpen(!dropdownOpen)
    }
    if(dropdownOpen2){
      setDropdownOpen2(!dropdownOpen2)
    }

  }

  return (
    <>
        <nav className="navbar">
       
        <ul className="navbar-links">
            <li onMouseEnter={toggleRest}> 
            <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
           <Link to='/products' ><span   onMouseEnter={toggleDropdown}
            className="dropdown-toggle" onClick={toggleDropdown}>
                Products <i className={`arrow ${dropdownOpen ? 'up' : 'down'}`}></i>
            </span>
            {dropdownOpen && (
                <div className="dropdown-menu" onMouseLeave={toggleDropdown} >
                <Link to="/products/category1" onClick={toggleDropdown}>Category 1</Link>
                <Link to="/products/category2" onClick={toggleDropdown}>Category 2</Link>
                <Link to="/products/all" onClick={toggleDropdown}>View All</Link>
                </div>
            )}
            </Link>
            </li>
            <li>
             <Link to='/Services'> <span  onMouseEnter={toggleDropdown2} className="dropdown-toggle">
                  Services <i className={`arrow1 ${dropdownOpen2 ? 'up' : 'down'}`}></i>
              </span>
              {dropdownOpen2 && (
                  <div className="dropdown-menu2" onMouseLeave={toggleDropdown2} >
                    <Link to="/services/webdevelopment" onClick={toggleDropdown2}>Dynamic Websites</Link>
                    <Link to="/services/itconsulting" onClick={toggleDropdown2}>IT Consulting</Link>
                    <Link to="/services/productdevelopment" onClick={toggleDropdown2}>Product Development</Link>
                    <Link to="/services/networking" onClick={toggleDropdown2}>Networking</Link>
                    <Link to="/services/cloudsolutions" onClick={toggleDropdown2}>Cloud Servies</Link>
                    <Link to="/services/cybersecurity" onClick={toggleDropdown2}>CyberSecurity</Link>
                    <Link to="/services/dataanalytics" onClick={toggleDropdown2}>Data Analaytic</Link>
                  </div>
              )}
              </Link>
            </li>
            <li onMouseEnter={toggleRest}>
            <Link to="/contact">Contact</Link>
            </li>
            <li id='login' onMouseEnter={toggleRest}>
            <Link to="/Login">Login</Link>
            </li>
        </ul>
        </nav>
    </>
  );
}

export default Navbar;