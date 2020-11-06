import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Oma } from "../store/oma/types";
import { addToCart } from "../store/booking/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Link, RouteComponentProps } from "react-router-dom";

const ProductContainer = styled.div`
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  flex: 0 0 25%;
`;

const ProductFigure = styled.figure`
  width: 230px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const ProductHeader = styled.h1`
  height: 76px;
`;

const ProductDescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddToCart = styled.button`
  padding: 10px;
  background-color: blue;
  color: #ffffff;
  border-radius: 10px;
`;

interface PropsFromState {
    loading: boolean;
    data: Oma;
    errors?: string;
  }
  
  interface propsFromDispatch {
    fetchOma: () => any;
  }
  
  type AllProps = PropsFromState & propsFromDispatch;

  const OmaDetails: React.FC<AllProps> = ({
    loading,
    errors,
    data,
    fetchOma
  }) => {
    useEffect(() => {
        fetchOma();
    }, []);
  
    return (
            <ProductContainer>
                <ProductFigure>
                    <ProductImage src={data.image} />
                </ProductFigure>
                <ProductHeader>{data.name}</ProductHeader>
            </ProductContainer>
    );
};

const mapStateToProps = () => { };

export default connect(mapStateToProps)(OmaDetails);
