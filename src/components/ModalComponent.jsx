import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalComponent = (props) => {
    const {title, boby, show} = props;    

    return (
        <Modal show={show} onHide={ () => props.actions.confirmationDelete(false) }>
            <Modal.Header closeButton>
                <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ boby }</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={ () => props.actions.confirmationDelete(false) }>
                    Cancelar
                </Button>
                <Button variant="success" onClick={ () => props.actions.confirmationDelete(true) }>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent