import React, { Component } from 'react';
import FURNITURE_ROW from '../shared/furnitureItems.js';


class FurnitureRow extends Component {
    render() {
        const furnitures = FURNITURE_ROW.filter (furniture => furniture.type === this.props.type).map(furniture => {
            return (
                <FurnitureItem furniture={furniture} />
            );
        })

        return (
            <div className="row row-content furniture-row p-4 justify-content-around">
                <div className="col-12 py-4">
                    <h3>{this.props.type}</h3>
                    {furnitures}
                </div>
            </div>
        );
    }
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


export default FurnitureRow;