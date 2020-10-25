import React, { useState } from 'react';
import './NavMenuButton.css';

const NavMenuButton = ({title, hasDropdown, dropdownContent}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const Dropdown = () => (
        <div className='drop'>
            {dropdownContent}
        </div>
    );

    return (
    <div className='nav-menu-button-container'>
        <div className='nav-menu-button' onClick={hasDropdown ? () => setShowDropdown(!showDropdown) : null}>
            {title}
            {hasDropdown && <span className='arrow down'/>}
        </div>
        {showDropdown && <Dropdown/>}
    </div>
)};

export default NavMenuButton;