import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Carer from "../models/Carers";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { fetchRequest } from "../store/carers/action";

const CarerContainer = styled.div`
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  flex: 0 0 25%;
`;

const CarerFigure = styled.figure`
  width: 230px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const CarerHeader = styled.h1`
  height: 76px;
`;

const CarerDescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface PropsFromState {
    loading: boolean;
    data: Carer;
    errors?: string;
  }
  
  interface propsFromDispatch {
    fetchOma: (omaId: string) => Carer;
  }
  
  type QueryParams = {
    omaId: string;
  }

  type AllProps = PropsFromState & propsFromDispatch;

  const OmaDetails: React.FC<AllProps> = ({
    loading,
    errors,
    data,
    fetchOma
  }) => {
    useEffect(() => {
        fetchRequest();
    }, []);
  
    return (
            <CarerContainer>
                <CarerFigure>
                    <CarerImage src={data.image} />
                </CarerFigure>
                <CarerHeader>{data.title}</CarerHeader>
            </CarerContainer>
    );
};

const mapStateToProps = () => { };

export default connect(mapStateToProps)(OmaDetails);
