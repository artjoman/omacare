import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  align-content: center;
  max-width: 1170px;
  padding: 10px;
  text-align: center;
  margin: auto;
`;

const Logo = styled.img`
  max-width: 300px;
  width: 70%;
  height: 70%;
  object-fit: contain;
  object-position: center;
`;

const Loader = styled.img`
  max-width: 100px;
  width: 70%;
  height: 70%;
  object-fit: contain;
  object-position: center;
`;

const Splash = (props: any) => {
  return (
    <Container>
      <Container>
        <Logo src="/images/logo.png" />
      </Container>
      <Container>
        <Loader src="/images/loader.svg" className="App-logo" />
      </Container>
    </Container>
  );
};

export default Splash;