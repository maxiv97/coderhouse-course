import React, { useState, useEffect } from 'react';
import './ItemsViewContainer.css';
import NavBar from '../../components/NavBar/Navbar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

const ItemsViewContainer = () => {
    const [itemsWereFilteredByCategory, setItemsWereFilteredByCategory] = useState(-1);
    const [itemSelected, setItemSelected] = useState(null);
    const [hiddeItemList, setHiddeItemList] = useState(false)
    const [addedItems, setAddedItems] = useState([]);

    const onCategoryClick = categoryFilteredId => {
        setItemsWereFilteredByCategory(categoryFilteredId);

        if (itemSelected !== null) {
            setItemSelected(null);
            setHiddeItemList(false);
        }
    }

    const itemDetailTask = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });

    const onItemSelected = item => {
        setHiddeItemList(true);
        itemDetailTask().then(() => setItemSelected(item));
    };

    const onAdd = (quantity, itemId) => {
        const hadPreviouslyAdded = itemAdded => itemAdded.itemId === itemId;

        if (addedItems.some(hadPreviouslyAdded)) {
            const newAddedItems = addedItems.map(item => {
                if (item.itemId === itemId) {
                    item.quantity = quantity;
                }
                return item;
            });

            setAddedItems([...newAddedItems]);
        } else {
            setAddedItems([...addedItems, {itemId, quantity}]);
        }
    };

    useEffect(() => {
        console.log('Items agregados: ', addedItems);
    });

    return (
        <div className='items-view-container'>
            <NavBar onCategoryClick={onCategoryClick}/>
            {!itemSelected && !hiddeItemList && <ItemListContainer itemsWereFilteredByCategory={itemsWereFilteredByCategory} onItemClick={onItemSelected}/>}
            {!itemSelected && hiddeItemList && <h2>Loading...</h2>}
            {itemSelected && <ItemDetailContainer item={itemSelected} onAddItem={onAdd}/>}
        </div>
    )
};

export default ItemsViewContainer;