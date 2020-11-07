import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import backgroundImg from "../assets/background.svg";

const Container = styled.div`
  width: 100%;
  align-content: center;
  max-width: 1170px;
  padding: 10px;
  text-align: center;
  margin: auto;
`;

const HeaderContainer = styled.div`
  width: 100%;
  align-content: center;
  max-width: 1170px;
  padding: 10px;
  text-align: center;
  margin: auto;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center top; 
`;

const Logo = styled.img`
  max-width: 75px;
  width: 70%;
  height: 70%;
  object-fit: contain;
  object-position: center;
  padding-top: 50px;
`;

const Helper = styled.img`
  max-width: 300px;
  width: 100%;
  height: 100%;
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

const LinkHome = styled.button`
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: #ffffff;
  border: #ffffff;
  font-family: Source Sans Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.15px;
  text-align: left;
`;

const ChoiceReceive = (props: any) => {
  return (
    <Container>
      <HeaderContainer>
        <Container>
          <Logo src="/images/logo.svg" />
        </Container>
        <Container>
          <Helper src="/images/group.svg" />
        </Container>
      </HeaderContainer>
      <Container>
        <Link to="/receive/new">
          <ButtonDark>New request</ButtonDark>
        </Link>
      </Container>
      <Container>
        <Link to="/receive/list">
          <ButtonLight>My request list</ButtonLight>
        </Link>
      </Container>
      <Container>
        <Link to="/">
          <LinkHome>BACK HOME</LinkHome>
        </Link>
      </Container>
    </Container>
  );
};

export default ChoiceReceive;