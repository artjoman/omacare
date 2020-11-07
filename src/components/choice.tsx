import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  align-content: center;
  max-width: 1170px;
  padding: 10px;
  text-align: center;
  margin: auto;
`;

const Header = styled.img`
  max-width: 300px;
  width: 70%;
  height: 70%;
  object-fit: contain;
  object-position: center;
`;


const ButtonDark = styled.button`
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: #f31d4b;
  border-radius: 4px;
  height: 57px;
  width: 259px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  border: #F2F2F2;
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
  color: #F2F2F2;
`;

const ButtonLight = styled.button`
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: #ffeaea;
  border-radius: 4px;
  border: #EB5757;
  height: 57px;
  width: 259px;
  left: 0px;
  top: 0px;
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
  color: #EB5757;
`;


const Choice = (props: any) => {
    return (
        <Container>
            <Container>
                <Header src="/images/logo.png" />
            </Container>
            <Container>
                <Link to="/receive">
                <ButtonDark>I need assistance</ButtonDark>
                </Link>
            </Container>
            <Container>
                <Link to="/give">
                <ButtonLight>I want to help</ButtonLight>
                </Link>
            </Container>
        </Container>
    );
};

export default Choice;