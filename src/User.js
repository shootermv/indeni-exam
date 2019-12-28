import React, {useState} from 'react';
import { Link } from "@reach/router";
import Modal from './shared/Modal';


export const User = ({ user }) => {
    const [showModal, setShowModal] = useState(false);
    const { fullName, id } = user;

    const toggleModal = ev => {
        ev && ev.preventDefault();
        setShowModal(!showModal);
    }

    return (<li>
          {showModal ? (
            <Modal>
              User
            </Modal>
          ) : null}        
        {fullName}
        <Link to={`/details/${id}`}>Edit</Link>
        <button onClick={toggleModal}>view</button>
    </li>);
};
