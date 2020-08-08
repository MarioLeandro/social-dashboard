import React from 'react';
import './style.css';

const Header = () => (
<header className="conteiner">
    <div id="esq">
        <h1>Social Media Dashboard</h1>
        <h4>Total Followers: 23,004</h4>
    </div>
    <div id="dir">
        <h4>Dark Mode
        <span className="switch">
            <input type="checkbox" className="checkbox" id="btn1"/>
                <label className="btn" htmlFor="btn1">
                </label>
        </span>
        </h4>
    </div>
    
</header>
);

export default Header;