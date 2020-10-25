import React from 'react';
import './NavBar.css';
import BrandingLogo from '../BrandingLogo/BrandingLogo';
import NavMenuList from '../NavMenuList/NavMenuList';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({onCategoryClick}) => (
    <div className='navbar-container'>
        <BrandingLogo/>
        <NavMenuList onCategoryClick={onCategoryClick}/>
        <CartWidget className='cart-widget'/>
    </div>
)

export default NavBar;