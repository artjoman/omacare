import React, { useState } from "react";
import BackButton from "./BackButton";
import RequestFormHeader from "./RequestFormHeader";

interface Props {
  clickHandler: () => void
}
export const RequestAge: React.FC<Props> = ({ clickHandler }) => {
  
  return (
    <>
      <RequestFormHeader backButtonHandler={clickHandler} headerText="Select age" subHeader="SELECT ONE ITEM"></RequestFormHeader>
    </>
  );
}

export default RequestAge;