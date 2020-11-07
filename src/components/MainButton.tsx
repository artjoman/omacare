import React from "react";

interface Props {
  labelText: string;
  clickHandler: () => void;
  buttonEnabled: boolean;
}

const stylesEnabled = {
  backgroundColor: "#F31D4B",
  color: "#FFFFFF",
  borderWidth: "0",
  borderStyle: "none",
  borderColor: "transparent",
  padding: "8px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "6px",
}

const stylesDisabled = {
  backgroundColor: "#F1F1F1",
  color: "#4F4F4F",
  borderWidth: "0",
  borderStyle: "none",
  borderColor: "transparent",
  padding: "8px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "6px",
}

const MainButton: React.FC<Props> = ({ labelText, clickHandler, buttonEnabled }) => {
  return (
    <button className="main-btn" disabled={!buttonEnabled} style={buttonEnabled ? stylesEnabled : stylesDisabled} onClick={clickHandler}>{labelText}</button>
  );
};

export default MainButton;