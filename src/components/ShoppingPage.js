import React, { Component } from 'react';

import FurnitureCarousel from './FurnitureCarousel.js';
import FurnitureRow from './FurnitureRow.js';
import * as furnitureTypes from '../shared/furnitureTypes.js';



class ShoppingPage extends Component {
    render() {
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
}


export default ShoppingPage;