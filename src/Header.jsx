import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './images/educhess_logo.png';
import Toggle from './Toggle.js';

// import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo" src={logo} alt="Educhess_logo" />
            </Link>
            <div className="header_nav">
                <Link to='/'>
                    <div className="header_option">
                        <span className="header_optionLineOne">Main</span>
                        <span className="header_optionLineOne">Home</span>
                    </div>
                </Link>
                <Link to='/login'>
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Guest</span>
                        <span className="header_optionLineOne">Sign In</span>
                    </div>
                </Link>

                <Link to='/gallery'>
                    <div className="header_option">
                        <span className="header_optionLineOne">Gallery</span>
                        <span className="header_optionLineOne">Pic</span>
                    </div>
                </Link>

                <Link to='/cform'>
                    <div className="header_option">
                        <span className="header_optionLineOne">Contact</span>
                        <span className="header_optionLineOne">Form</span>
                    </div>
                </Link>

                {/* <Link to='/db'>
                <div className="header_option">
                    <span className="header_optionLineOne">User Dashboard</span>
                     <span className="header_optionLineOne">(When Logged In)</span> 
                </div>
                </Link> */}
                {
                    <Toggle />}

            </div>

        </div>


    )
}

export default Header
