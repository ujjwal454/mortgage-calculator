"use client";

import React from "react";

interface IRadioProps extends React.HTMLAttributes<HTMLDivElement> {
  isSelected: boolean;
  label: string;
}

const RadioInput: React.FC<IRadioProps> = ({ isSelected, label, ...rest }) => {
  return (
    <div className="radio-container" {...rest}>
      <div className="radio-group">
        <input type="radio" checked={isSelected} />
        <span className="radio-label">{label}</span>
      </div>
    </div>
  );
};

export default RadioInput;
