import React, { Component } from 'react';
import ShoppingPage from './ShoppingPage.js'
import CheckoutPage from './CheckoutPage.js'
import Footer from './Footer.js';
import Header from './Header.js';
//todo: redux, sass

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                {/* <ShoppingPage /> */}
                <CheckoutPage />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;