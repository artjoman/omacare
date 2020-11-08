import React from "react";

interface Props {
  labelText: string;
  clickHandler: () => void;
  chipSelected: boolean;
}

const stylesNeutral = {
  width: "340px",
  height: "75px",
  color: "#f31d4b",
  borderRadius: "60px",
  borderStyle: "solid",
  borderWidth: "3px",
  borderColor: "#F31D4B",
  backgroundColor: "#FFFFFF",
  fontFamily: "SourceSansPro",
  fontSize: "25px",
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "0.8",
  letterSpacing: "normal",
  marginTop: "10px",
  marginBottom: "10px",
}

const stylesSelected = {
  width: "340px",
  height: "75px",
  color: "#f31d4b",
  borderStyle: "none",
  borderRadius: "60px",
  backgroundColor: "#FFEAEA",
  fontFamily: "SourceSansPro",
  fontSize: "25px",
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "0.8",
  letterSpacing: "0.25px",
  marginTop: "10px",
  marginBottom: "10px",
}

const ChipLabel: React.FC<Props> = ({ labelText, clickHandler, chipSelected }) => {
  return (
    <button className="main-btn" style={chipSelected ? stylesSelected : stylesNeutral} onClick={clickHandler}>{labelText}</button>
  );
};

export default ChipLabel;