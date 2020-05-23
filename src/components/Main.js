import React, { Component } from 'react';
import ShoppingPage from './ShoppingPage.js'
import CheckoutPage from './CheckoutPage.js'
import Footer from './Footer.js';
import Header from './Header.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

//todo: redux, sass

class Main extends Component {
    constructor(props) {
        super(props);

        this.handleModalOn = this.handleModalOn.bind(this);
        this.handleModalOff = this.handleModalOff.bind(this);

        this.state = {
            //todo: make it false
            isDealModalTriggered: true,
            isModalOpen: false
        }
    }

    handleModalOn() {
        if (!this.state.isDealModalTriggered && !this.state.isModalOpen) {
            this.setState({
                isModalOpen: true
            });
            this.setState({isDealModalTriggered: true});
        }
    }
    handleModalOff(){
            this.setState({isModalOpen: false});
            this.setState({isDealModalTriggered: true});
    }

    render() {
        setTimeout(this.handleModalOn, 10000);

        return (
            <div  onMouseLeave={this.handleModalOn}>
                <Modal isOpen={this.state.isModalOpen} toggle={this.handleModalOn}>
                    <ModalHeader toggle={this.handleModalOff}>
                        Special Offer!
                    </ModalHeader>
                    <ModalBody>
                    <img src="img/celebrate.jpg" className="w-100" />
                <h5>30% off when you use coupon code <span className="font-weight-bolder attention">DEAL</span>.</h5>
                    </ModalBody>
                </Modal>
                <Header />
                <Switch>
                    <Route path='/home' render={() => <ShoppingPage />} />
                    <Route path='/checkout' render={() => <CheckoutPage />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;