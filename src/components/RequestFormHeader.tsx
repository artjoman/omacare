import { isAbsolute } from "path";
import React from "react";
import leftArrow from './arrow_left.svg';
import SecondaryButton from './SecondaryButton';

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
      <SecondaryButton clickHandler={backButtonHandler} labelText={'Back'} buttonEnabled={true} />
      <div className="formHeader" style={headerStyle}><h5>{headerText}</h5></div>
      <div className="formSubHeader" style={subHeaderStyle}>{subHeader}</div>
    </>
  );
}

export default FormHeader;