import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import {baseUrl} from "../shared/baseUrl"

class DealModal extends React.Component {
    constructor(props) {
        super(props);

        this.handleModalOn = this.handleModalOn.bind(this);
        this.handleModalOff = this.handleModalOff.bind(this);
        this.state = {
        isDealModalTriggered: false,
        isModalOpen: false
        }
    }

    handleModalOn() {
        if (!this.state.isDealModalTriggered && !this.state.isModalOpen) {
            this.setState({
                isModalOpen: true
            });
            this.setState({ isDealModalTriggered: true });
        }
    }
    handleModalOff() {
        this.setState({ isModalOpen: false });
        this.setState({ isDealModalTriggered: true });
    }

    render() {
        //todo
        // setTimeout(this.handleModalOn, 10000);

        return (
            // <div onMouseLeave={this.handleModalOn}>
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.handleModalOn}>
                    <ModalHeader toggle={this.handleModalOff}>
                        Special Offer!
                    </ModalHeader>
                    <ModalBody>
                        <img src={baseUrl + "img/celebrate.jpg"} className="w-100" alt="fireworks" />
                        <h5>30% off when you use coupon code <span className="font-weight-bolder attention">DEAL</span>.</h5>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default DealModal;