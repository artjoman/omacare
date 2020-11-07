import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import OmaList from "./omaCard";
import { ApplicationState } from "../store";
import { Oma } from "../store/oma/types";
import { fetchRequest } from "../store/oma/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

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

const ServiceDark = styled.button`
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 340px;
  height: 75px;
  left: 18px;
  top: 151px;
  background: #FFEAEA;
  border-radius: 60px;
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
  color: #EB5757;
`;


const ServiceLight = styled.button`
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 340px;
  height: 75px;
  left: 18px;
  top: 331px;
  background: #FFFFFF;
  border: 4px solid #EB5757;
  box-sizing: border-box;
  border-radius: 60px;
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

interface PropsFromState {
  loading: boolean;
  data: Oma[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const Landing: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequest
}) => {
  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <Container>
      <Logo src="/images/logo.png" />

    <Container>
      <ButtonDark>I need help</ButtonDark>
    </Container>
    <Container>
      <ButtonLight>I can help</ButtonLight>
    </Container>
    <Container>
      <ServiceLight>I can help</ServiceLight>
    </Container>
    <Container>
      <ServiceDark>I can help</ServiceDark>
    </Container>
    </Container>
  );
};

const mapStateToProps = ({ Oma }: ApplicationState) => ({
  loading: Oma.loading,
  errors: Oma.errors,
  data: Oma.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
