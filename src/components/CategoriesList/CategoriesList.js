import React from 'react';
import './CategoriesList.css';
import Category from '../Category/Category';
import categoriesMock from '../../mocks/categories.json';

const CategoriesList = ({onCategoryClick}) => {

    const categories = categoriesMock.categories;
    
    return (
        <div className='categories-list'>
            {categories.map(category => 
                <Category
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    handleCategoryClick={onCategoryClick}/>
                )}
        </div>
    );
}

export default CategoriesList;

