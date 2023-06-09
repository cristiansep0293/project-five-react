import Proptypes from "prop-types";
import { useRef, useState } from "react";
import "./FormTrainer.css";

const FormTrainer = ({ onSaveName }) => {
  const [nameTrainer, setNameTrainer] = useState("");
  const [error, setError] = useState("");
  const inputUpdate = useRef();

  const onChangeNameTrainer = (e) => {
    const newValue = e.target.value;
    if (!inputUpdate.current) inputUpdate.current = true;
    if (newValue === "") setError("The name is empty!");
    else if (/[^a-z ]/i.test(newValue))
      setError("Only letters and spaces are allowed.");
    else if (!/^[a-z]{2,} ?$/i.test(newValue))
      setError("The name must have a minimum of two letters.");
    else setError("");
    setNameTrainer(newValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!error && inputUpdate.current) onSaveName(nameTrainer);
  };

  return (
    <>
      <form className="start-form" onSubmit={onSubmit}>
        {Boolean(error) && <p>{error}</p>}
        <input
          className="start-form__input"
          type="text"
          name="nameTrainer"
          placeholder="Your name"
          value={nameTrainer}
          onChange={onChangeNameTrainer}
        />
        <button
          className="start-form__button"
          type="submit"
          onClick={onSaveName}
        >
          Start
        </button>
      </form>
    </>
  );
};

FormTrainer.propTypes = {
  onSaveName: Proptypes.func.isRequired,
};

export default FormTrainer;
