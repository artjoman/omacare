import React from "react";
import leftArrow from './arrow_left.svg';
import BackButton from "./BackButton";

interface Props {
  backButtonHandler: () => void;
  headerText: string;
  subHeader: string;
}

export const FormHeader: React.FC<Props> = ({ backButtonHandler, headerText, subHeader }) => {
  const headerStyle = {}
  const subHeaderStyle = {}
  return (
    <>
      <BackButton clickHandler={backButtonHandler}></BackButton>
      <div style={headerStyle}>{headerText}</div>
      <div style={subHeaderStyle}>{subHeader}</div>
    </>
  );
}

export default FormHeader;