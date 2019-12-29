import React from 'react';
import Modal from '../../shared/Modal';


export const UserModal = ({ showModal, toggleModal, user }) => {
 
    const { fullName, birthday, address, avatar, email } = user;

   

    return (showModal ? (<Modal closeMe={toggleModal}>   
        <header>
          <img src={avatar} alt={fullName}/>
          <button className="modal-close-btn" onClick={toggleModal}>x</button>
        </header>
        <div className="modal-body">
           <div>Full Name:</div><div>{fullName}</div>
           <div>BirthDay:</div><div>{birthday}</div>
           <div>Email:</div><div>{email}</div>
           <div>Address:</div><div>{address}</div>
        </div> 
    </Modal>) : null);
};