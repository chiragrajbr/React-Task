import React, { useState } from "react";

function Task2() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value < 0) {
      setMessage("Enter a positive number");
    } else if (value % 2 === 0) {
      setMessage(
        `The next three even numbers are: ${Number(value) + 2}, ${
          Number(value) + 4
        }, ${Number(value) + 6}`
      );
    }else if (value % 2 !== 0) {
        setMessage(
          `The next three odd numbers are: ${Number(value) + 2}, ${
            Number(value) + 4
          }, ${Number(value) + 6}`
        );
      } 
    else {
      setMessage("");
    }
  };

  return (
    <div>
      <label>
        Enter a number:{" "}
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      <p>{message}</p>
    </div>
  );
}

export default Task2;
