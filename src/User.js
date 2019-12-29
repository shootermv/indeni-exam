import React, {useState} from 'react';
import { Link } from "@reach/router";
import {UserModal} from './UserModal';


import edit from './edit.svg';
import view from './view.svg';

export const User = ({ user }) => {
    const [showModal, setShowModal] = useState(false);
    const { fullName, id, email, avatar} = user;

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (<li>
         
        <UserModal {...{showModal, toggleModal, user}}/>

        <img className="main" src={avatar} alt={`${fullName}`}/>       
        <div>{fullName}</div>
        <div>{email}</div>
        <div className="actions">
          <Link to={`/details/${id}`}><img src={edit} alt={edit}/></Link>
          <button onClick={toggleModal}><img src={view} alt={view}/></button>
        </div>   
    </li>);
};
