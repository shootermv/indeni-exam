import React, { useContext, useState, useRef } from "react";
import { UserContext } from "./contexts/UserContext";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

const getNewUser = () => ({
  avatar: "http://placecorgi.com/300/300",
  fullName: "",
  email: "",
  address: "",
  birthday: "1998-07-15"
});
const convertToYYYYMMDD = birthday => {
  let [month, day, year] = birthday.split("/");
  day = `0${day}`.slice(-2);
  month = `0${month}`.slice(-2);
  return `${year}-${month}-${day}`;
};

const getUser = (users, id) => {
  const user = users.find(user => +id === user.id);
  return Object.assign({}, user, {
    birthday: convertToYYYYMMDD(user.birthday)
  });
};

export const AddEditPage = ({ id }) => {
  const isNew = id === "new";
  const ref = useRef(null);
  const { users, dispatch } = useContext(UserContext);
  const [user, setUser] = useState(isNew ? getNewUser : getUser(users, id));

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const saveUser = e => {
    e.preventDefault();
    if (!ref.current.checkValidity()) {
      // missing value
      return;
    }

    if (isNew) {
      dispatch({ type: "ADD_USER", user });
      navigate("/");
      return;
    }
    dispatch({ type: "EDIT_USER", user });
    navigate("/");
  };

  return (
    <>
      <header className="main back">
        <Link to="/">Back</Link>
      </header>
      <form onSubmit={saveUser} ref={ref}>
        <img src={user.avatar} alt={user.fullName} />
        <div className="container">
          <div>Full Name:</div>
          <div>
            <input
              value={user.fullName}
              name="fullName"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>BirthDay:</div>
          <div>
            <input
              type="date"
              value={user.birthday}
              name="birthday"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>Email:</div>
          <div>
            <input
              value={user.email}
              name="email"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>Address:</div>
          <div>
            <input
              value={user.address}
              name="address"
              onChange={handleInputChange}
              required
            />
          </div>
          <button>Save</button>
        </div>
      </form>
    </>
  );
};
