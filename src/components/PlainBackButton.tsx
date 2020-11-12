import React from "react";

interface Props {
  labelText: string;
  clickHandler: () => void;
  buttonEnabled: boolean;
}

const stylesEnabled = {
  backgroundColor: "#FFEAEA",
  color: "#F31D4B",
  borderWidth: "0",
  borderStyle: "none",
  borderColor: "transparent",
  padding: "8px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "6px",
  position: "absolute",
  top: "10px",
  left: "10px",
}

const stylesDisabled = {
  backgroundColor: "#FFEAEA",
  color: "#4F4F4F",
  borderWidth: "0",
  borderStyle: "none",
  borderColor: "transparent",
  padding: "8px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "6px",
  opacity: "0.8",
  position: "absolute",
  top: "10px",
  left: "10px",
}

const SecondaryButton: React.FC<Props> = ({ labelText, clickHandler, buttonEnabled }) => {
  return (
    <button className="plainBackButton" disabled={!buttonEnabled} onClick={clickHandler}>{labelText}</button>
  );
};

export default SecondaryButton;
