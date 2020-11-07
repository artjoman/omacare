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
