import React from "react";

interface IButtonProps {
  label: string;
  onClick: VoidFunction;
}

const PrimaryButton: React.FC<IButtonProps> = ({ label, onClick }) => {
  return <a onClick={onClick}>{label}</a>;
};

export default PrimaryButton;
