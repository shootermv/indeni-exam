import React, { useContext } from 'react';
import { UserContext } from './contexts/UserContext';

export const AddEditPage = ({id}) => {
    const isNew = id === 'new';

    const { dispatch } = useContext(UserContext);
    const saveUser = () => {
      if (isNew) {
        dispatch({type: 'ADD_USER', user: {fullName: 'Gotfrid Yooo'}});
        return;
      }
      dispatch({type: 'EDIT_USER', user: 
        {
            "id": 4,
            "fullName": "Milicentstt Plewesss",
            "email": "mplewes3@cisco.com",
            "address": "6 Oriole Alley",
            "avatar": "https://robohash.org/autvoluptatibusid.jpg?size=150X150&set=set1",
            "birthday": "5/4/1989"
          },        
      });
    }
    return (<>
      <button onClick={saveUser}>Save</button>
    </>);
};
