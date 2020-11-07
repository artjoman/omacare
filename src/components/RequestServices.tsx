import React, { useImperativeHandle, useState } from "react";
import { Service } from "../models/Service";
import BackButton from "./BackButton";
import MainButton from "./MainButton";
import RequestFormHeader from "./RequestFormHeader";

interface Props {
  backButtonHandler: () => void;
  nextButtonHandler: () => void;
  headerText: string;
  subHeader: string;
}
export const RequestServices: React.FC<Props> = React.forwardRef((props, ref) => {
  const [checkedServices, setCheckedServices] = useState(Array<Service>());

  const getCheckedServices = () => {
    return checkedServices;
  }

  useImperativeHandle(ref, () => {
    return {
      getCheckedServices
    }
  });

  return (  
    <>
      <RequestFormHeader {...props} />
      <MainButton labelText="Next" clickHandler={props.nextButtonHandler} buttonEnabled={true} />
    </>
  );
}

export default RequestServices;