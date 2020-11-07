import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CarerCard from "./requestCard";
import { ApplicationState } from "../store";
import Requests from "../models/OmaRequest";
import { fetchRequestRequest } from "../store/requests/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import OmaRequest from "../models/OmaRequest";

const Container = styled.div`
  width: 100%;
  max-width: 340px;
  margin: auto;
`;

const Header = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #000000;
  padding: 20px;
`;

const CarerListing = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface PropsFromState {
  loading: boolean;
  data: OmaRequest[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequestRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const RequestList: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequestRequest
}) => {
  useEffect(() => {
    fetchRequestRequest();
  }, []);

  return (
    <Container>
      <Header>Care requests</Header>
      <CarerListing>
        {data.map(item => {
          return <CarerCard request={item} />;
        })}
      </CarerListing>
    </Container>
  );
};

const mapStateToProps = ({ requests }: ApplicationState) => ({
  loading: requests.loading,
  errors: requests.errors,
  data: requests.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequestRequest: () => {
      dispatch(fetchRequestRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);
