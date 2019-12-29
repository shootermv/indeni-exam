import React, { useContext, useState } from 'react';
import { UserContext } from './contexts/UserContext';
import { navigate } from "@reach/router";

const getNewUser = () => ({avatar: 'http://placecorgi.com/300/300', fullName: '', email: '', address: '', birthday: ''});

export const AddEditPage = ({id}) => {
    const isNew = id === 'new';
    
    const { users, dispatch } = useContext(UserContext);
    users.find(user => id === user.id)
    
    const [user, setUser] = useState(isNew ? getNewUser : users.find(user => +id === user.id));
 
    const handleInputChange = event => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
    }

    const saveUser = e => {
      e.preventDefault();  
      if (isNew) {
        dispatch({type: 'ADD_USER', user});
        navigate('/');
        return;
      }
      dispatch({type: 'EDIT_USER', user});
      navigate('/');
    }

    return (
        <form onSubmit={saveUser}>
            <img src={user.avatar} alt={user.fullName}/>
            <div className="container">
                
                <div>Full Name:</div><div><input value={user.fullName} name="fullName" onChange={handleInputChange}/></div>
                <div>BirthDay:</div><div><input type="date"  value={user.birthday} name="birthday" onChange={handleInputChange}/></div>
                <div>Email:</div><div><input value={user.email} name="email" onChange={handleInputChange}/></div>
                <div>Address:</div><div><input value={user.address} name="address" onChange={handleInputChange}/></div>     
                <button>Save</button>
            </div>
        </form>
    );
};
