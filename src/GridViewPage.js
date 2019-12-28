import React, {useContext} from 'react';
import { UserContext } from './contexts/UserContext';

const User = () => {
  return (<>user<br/></>);
}

export const GridViewPage = () => {
    const { users } = useContext(UserContext);
    return users.length ? (
      <div className="users-list">
        <ul>
          {users.map(user => {
            return ( <User user={user} key={user.id} /> );
          })}
        </ul>
      </div>
    ) : (
      <div className="empty">No users yet, sorry...</div>
    );
};
