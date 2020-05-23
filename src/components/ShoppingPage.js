import React from 'react';

import FurnitureCarousel from './FurnitureCarousel.js';
import * as furnitureTypes from '../shared/furnitureTypes.js';
import FURNITURE_ROW from '../shared/furnitureItems.js';

function ShoppingPage() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row row-content justify-content-center pt-5 linkPadding" id="dealsCarousel">
                    <div className="col-auto">
                        <FurnitureCarousel />
                    </div>
                </div>
                <FurnitureRow type={furnitureTypes.TABLES_CHAIRS}/>
                <hr/>
                <FurnitureRow type={furnitureTypes.COUCHES}/>
                <hr/>
                <FurnitureRow type={furnitureTypes.BEDS}/>
            </div>
        </React.Fragment>
    );
}

function FurnitureRow({type}){
        const furnitures = FURNITURE_ROW.filter (furniture => furniture.type === type).map(furniture => {
            return (
                <FurnitureItem furniture={furniture} />
            );
        })

        return (
            <div className="row row-content furniture-row p-4 justify-content-around">
                <div className="col-12 py-4">
                    <h3>{type}</h3>
                    {furnitures}
                </div>
            </div>
        );
    
}

function FurnitureItem({furniture}){
    return (
        <div key={furniture.id} className='col col-12 col-xl-5 py-2'>
            <div className='row row-content furniture-card align-items-center'>
                <div className='col col-6'>
                    <img src={furniture.image} alt={furniture.name}/>
                </div>
                <div className='col col-4'>
                    <p>{furniture.name}: ${furniture.price}</p>
                </div>
                <div className='col col-2 p-0'>
                    <button className='btn btn-lg orangeButton addToCart'>+<i className='fa fa-shopping-cart'></i></button>
                </div>
            </div>
        </div>
    );
}


export default ShoppingPage;