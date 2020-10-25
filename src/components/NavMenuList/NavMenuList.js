import React from 'react';
import NavMenuButton from '../NavMenuButton/NavMenuButton';
import './NavMenuList.css';
import CategoriesList from '../CategoriesList/CategoriesList';


const NavMenuList = ({onCategoryClick}) => {

    return (
    <div className='nav-menu-list'>
        <NavMenuButton 
            title='Categorias'
            hasDropdown={true}
            dropdownContent={<CategoriesList onCategoryClick={onCategoryClick}/>}
        />
    </div>
)};

export default NavMenuList;