import React from 'react';
import Modal from './shared/Modal';


export const UserModal = ({ showModal, toggleModal, user }) => {
 
    const { fullName } = user;

   

    return (showModal ? (<Modal closeMe={toggleModal}>   
        <header>
          <h4>User {fullName}</h4>
          <button className="modal-close-btn" onClick={toggleModal}>x</button>
        </header>
        <div className="modal-body modal-wrap">
           Here will come details
        </div>

      
    </Modal>) : null);
};