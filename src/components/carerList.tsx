import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CarerCard from "./carerCard";
import { ApplicationState } from "../store";
import { Carer } from "../store/carers/types";
import { fetchRequest } from "../store/carers/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;

const CarerListing = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface PropsFromState {
  loading: boolean;
  data: Carer[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: () => any;
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

  return (
    <Container>
      {/* <Navbar /> */}
      <CarerListing>
        {data.map(item => {
          return <CarerCard carer={item} />;
        })}
      </CarerListing>
    </Container>
  );
};

const mapStateToProps = ({ Carer }: ApplicationState) => ({
  loading: Carer.loading,
  errors: Carer.errors,
  data: Carer.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarerList);
