import React from "react";
import styled from "styled-components";
import leftArrow from '../arrow_left.svg';

interface BackButtonProps {
  clickHandler: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({clickHandler}) => {
  const ButtonBack = styled.div`
    background: white;
    border: #EB5757;
    outline: none !important;
    box-shadow: none; 
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 16px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.75px;
    color: #000000;
    position: absolute;
    cursor: pointer;
  `;

  return (
    <>
      <ButtonBack onClick={clickHandler}>Back</ButtonBack>
    </>
  );
}

export default BackButton;