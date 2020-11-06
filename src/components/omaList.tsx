import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import OmaCard from "./omaCard";
import { ApplicationState } from "../store";
import { Oma } from "../store/oma/types";
import { fetchRequest } from "../store/oma/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;

const OmaListing = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const OmaList: React.FC<AllProps> = ({
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
      <OmaListing>
        {data.map(item => {
          return <OmaCard oma={item} />;
        })}
      </OmaListing>
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

export default connect(mapStateToProps, mapDispatchToProps)(OmaList);
