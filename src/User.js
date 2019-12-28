import React, {useState} from 'react';
import { Link } from "@reach/router";
import {UserModal} from './UserModal';


export const User = ({ user }) => {
    const [showModal, setShowModal] = useState(false);
    const { fullName, id } = user;

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (<li>
         
        <UserModal {...{showModal, toggleModal, user}}/>
               
        {fullName}
        <Link to={`/details/${id}`}>Edit</Link>
        <button onClick={toggleModal}>view</button>
    </li>);
};
