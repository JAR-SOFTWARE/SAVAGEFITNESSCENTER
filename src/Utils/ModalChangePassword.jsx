import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState,useEffect} from 'react';

const ModalChangePassword = (props) =>{
    
    const [ModalChangePassword, setModalChangePassword] = useState(false);
    




  
   return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
            <Modal.Footer>
           
                
            </Modal.Footer>
        </Modal>
    )
}

export default ModalChangePassword;