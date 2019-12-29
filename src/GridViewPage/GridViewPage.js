import React, { useContext } from "react";
import { Link } from "@reach/router";
import { UserContext } from "../contexts/UserContext";
import { User } from "../components/User";

export const GridViewPage = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      <header className="main">
        <Link to="/details/new">New</Link>
        <Link to="/match">Find Your Match</Link>
      </header>
      {users.length ? (
        <div className="users-list">
          <ul>
            {users.map(user => {
              return <User user={user} key={user.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">No users yet, sorry...</div>
      )}
    </>
  );
};
