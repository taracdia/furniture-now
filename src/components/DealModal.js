import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { baseUrl } from "../shared/baseUrl"

function DealModal(props) {
    return (
        <Modal isOpen={props.isDealModalOpen} toggle={props.openDealModal}>
            <ModalHeader toggle={props.closeDealModal}>
                Special Offer!
                    </ModalHeader>
            <ModalBody>
                <img src={baseUrl + "img/celebrate.jpg"} className="w-100" alt="fireworks" />
                <h5>30% off when you use coupon code <span className="font-weight-bolder attention">DEAL</span>.</h5>
            </ModalBody>
        </Modal>
    );
}

export default DealModal;