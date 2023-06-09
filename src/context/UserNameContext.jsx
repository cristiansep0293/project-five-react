import { createContext, useState } from "react";
import Proptypes from "prop-types";

export const UserNameContext = createContext(null);

export const UserNameProvider = ({ children }) => {
  const [userNameTrainer, setUserNameTrainer] = useState(
    localStorage.getItem("userNameTrainer") ?? ""
  );
  const saveUserName = (newUserName) => {
    setUserNameTrainer(newUserName);
    localStorage.setItem("userNameTrainer", newUserName);
  };
  const deleteUserName = () => {
    setUserNameTrainer("");
    localStorage.removeItem("userNameTrainer");
  };
  const value = { userNameTrainer, saveUserName, deleteUserName };

  return (
    <UserNameContext.Provider value={value}>
      {children}
    </UserNameContext.Provider>
  );
};

UserNameProvider.propTypes = {
  children: Proptypes.object.isRequired,
};
