"use client";

import React from "react";

interface IInputContainerProps {
  errorMessage?: any;
  inputValue?: number;
  onChangeText: (val: string) => void;
  inputLabel: String;
  inputUnit: string;
}

const InputContainer: React.FC<IInputContainerProps> = ({
  errorMessage,
  inputValue,
  onChangeText,
  inputLabel,
  inputUnit,
}) => {
  return (
    <div className="input-container">
      <h2>{inputLabel}</h2>
      <div className="input-field-container">
        <div>{inputUnit}</div>
        <input
          type="number"
          onChange={(event) => onChangeText(event.target.value)}
          value={inputValue || ""}
        />
      </div>
    </div>
  );
};

export default InputContainer;
