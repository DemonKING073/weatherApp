import React, { useState } from 'react';
import SearchIcon from '../assets/hamro.svg';

const Nav=(props)=>{
    const [state,setState]=useState('');
    
    const handleClick=()=>{
        props.name(state);
    }
    return(
        <nav>
            <div className="logo-name">Weather <span>App</span></div>
            <div className="search-box">
                <input className="input"  onChange={(e)=>setState(e.target.value)} placeholder="Search" />
                <img  className="search-icon" onClick={handleClick}  src={SearchIcon} alt="icon" />
            </div>
        </nav>
    );
}

export default Nav;