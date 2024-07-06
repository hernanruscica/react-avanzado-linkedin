import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const MyButtonError = () => {
  const [visibleError, setVisibleError] = useState(false);
  const showErrorMessage = (e) => {
    setVisibleError(true);
    e.target.disabled = true;
    setTimeout(() => {
        setVisibleError(false)
        e.target.disabled = false;
    }, 1000);
  };

  const handleClick = (e) => {
    try {
      e.metodoIncorrecto();
    } catch (error) {
      showErrorMessage(e);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Error handle example</button>
      {visibleError && <ErrorMessage message="probando error" />}
    </div>
  );
};
export default MyButtonError;
