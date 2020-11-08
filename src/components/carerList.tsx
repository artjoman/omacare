import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CarerCard from "./carerCard";
import { ApplicationState } from "../store";
import Carer from "../models/Carers";
import { fetchRequest } from "../store/carers/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

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

interface ParamTypes {
  id: string
}

interface PropsFromState {
  loading: boolean;
  data: Carer[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: () => any;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

type AllProps = PropsFromState & propsFromDispatch;

const CarerList: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequest
}) => {
  useEffect(() => {
    fetchRequest();
  }, []);

  const query = useQuery();
  const { id } = useParams<ParamTypes>();
  return (
    <Container>
      <Header>Care providers</Header>
      <div> Current query id# {id}</div>
      <div> Current query name {query.get('name')}</div>

      <CarerListing>
        {data.map(item => {
          return <CarerCard carer={item} />;
        })}
      </CarerListing>
    </Container>
  );
};

const mapStateToProps = ({ carers, router }: ApplicationState) => ({
  loading: carers.loading,
  errors: carers.errors,
  data: carers.data,
  id: router.location.pathname
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarerList);
