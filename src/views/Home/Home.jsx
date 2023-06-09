import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";
import { useLocation, useNavigate } from "react-router-dom";
import FormTrainer from "../../components/home/FormTrainer/FormTrainer";
import imgFooter from "../../assets/img/Footer.png";
import "./Home.css";

const Home = () => {
  const { saveUserName } = useContext(UserNameContext);
  const navigate = useNavigate();
  const location = useLocation();

  const saveNameTrainerForm = (nameTrainer) => {
    saveUserName(nameTrainer);
    navigate(location.state?.from ?? "/Pokedex");
  };

  return (
    <section>
      <div className="start">
        <img
          className="start-img"
          src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1686528000&Signature=cTQ96T4tp65XIOan4OK-~mnz18YJaD33Pta1O8PdoOP4rzpNwthXbQZZUOddVHCPYTnGLH9d-0iZH105QYPqWPV3IkbuJ2KJZzO6S-n~ZOTRkTfZrokLidLQktlKvlAw4W63QkOnXrUHSh~kO8~YHNKIDaDtdqjn0I22MgkdMKSZoMkS6tNZo2Aw7Risdh29YKVCTMA-PLsnvXSyzIxLgMI66N0zxxg0oyISiwJaB~7vVuZ7ENTHBbF0ZDO6REbUKOzr2NEuGz3OCOQS3Z2i4p46fsuz2CpG0Qg4~cw6g8Xt2AkAR7ihsTtOuFDxiViSnBSFsabb9uAR2P14p0PFEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="imgPokedex"
        />
        <div className="start-title">
          <h1 className="start-title__title">!Hello trainer¡</h1>
          <p className="start-title__text">
            For you can start session tell me your name
          </p>
        </div>
        <FormTrainer onSaveName={saveNameTrainerForm} />
        <img className="imgFooter" src={imgFooter} alt="imgFooter" />
      </div>
    </section>
  );
};

export default Home;
