import { Outlet, useNavigate } from "react-router-dom";
import { UserNameContext } from "../../../context/UserNameContext";
import { useContext } from "react";
import imgHeader from "../../../assets/img/Header.png";
import "./Layout.css";

const Layout = () => {
  const { deleteUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  const logOut = () => {
    deleteUserName();
    navigate("/");
  };

  return (
    <div className="header">
      <header>
        <img className="header-img" src={imgHeader} alt="imgHeader" />
      </header>
      <button className="header-button-logOut" onClick={logOut}>
        Log out
      </button>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
