import React from 'react';
import './CategoriesList.css';
import Category from '../Category/Category';

export default class CategoriesListContainer extends React.Component {

    state = {
        categories: [
            {
                id: 0,
                isClicked: false,
                title: "Aperitivos"
            },
            {
                id: 1,
                isClicked: false,
                title: "Cervezas"
            },
            {
                id: 2,
                isClicked: false,
                title: "Champagne"
            },
            {
                id: 3,
                isClicked: false,
                title: "Licores"
            },
            {
                id: 4,
                isClicked: false,
                title: "Vinos"
            },
            {
                id: 5,
                isClicked: false,
                title: "Vodka"
            }
        ]
    }
    
    handleCategoryClick = id => {
        const newCategories = this.state.categories;
        newCategories[id].isClicked = !this.state.categories[id].isClicked;
        
        this.setState({
            categories: this.state.categories
        })
    }

    render() {
        const CategoriesList = () => (
            <div className='categories-list'>
                {this.state.categories.map(category => 
                    <Category
                        key={category.id}
                        id={category.id}
                        isClicked={category.isClicked}
                        title={category.title}
                        handleCategoryClick={this.handleCategoryClick}/>
                    )}
            </div>
        );
        
        return (
            <div className='categories-list-container'>
                <label className='categories-title'>Lista de categorías</label>
                <CategoriesList/>
            </div>
        );
    }
}



