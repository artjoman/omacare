import React from "react";

const styleMain = {
  backgroundColor: "#F31D4B",
  color: "#FFFFFF"
}

const styleMainDisabled = {
  backgroundColor: "#F1F1F1",
  color: "#4F4F4F"
}

interface Props {
  labelText: string;
  clickHandler: () => void;
  enabled: boolean;
}

const MainButton: React.FC<Props> = ({ labelText, clickHandler, enabled }) => {
  return (
    <button style={enabled ? styleMain : styleMainDisabled} onClick={clickHandler}>{labelText}</button>
  );
};

export default MainButton;
