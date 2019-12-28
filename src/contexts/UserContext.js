import React, { createContext, useEffect, useReducer } from "react";
import { userReducer } from "../reducers/UserReducer";

import usersFromJson from './users.json';
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, [], () => {
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : usersFromJson;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return <UserContext.Provider value={{users, dispatch}}>
      {children}
   </UserContext.Provider>;
};

export default UserContextProvider;
