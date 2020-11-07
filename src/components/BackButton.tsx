import React from "react";
import leftArrow from '../arrow_left.svg';

interface BackButtonProps {
  clickHandler: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({clickHandler}) => {


  return (
    <>
      <div className="container">
        <img src={leftArrow} onClick={clickHandler} alt="Back" />
        <button className="btn" onClick={clickHandler}></button>
      </div> 
    </>
  );
}

export default BackButton;