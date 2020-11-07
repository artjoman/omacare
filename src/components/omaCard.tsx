import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Oma } from "../store/oma/types";
import { addToCart } from "../store/booking/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
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

interface propsFromComponent {
    oma: Oma;
}

interface propsFromDispatch {
    addToCart: (item: any) => any;
}

type Props = propsFromComponent & propsFromDispatch;

const OmaCard: React.FC<Props> = ({ oma }) => {
    return (
        <Link to={"/omas/"+oma.id}>
            <ProductContainer>
                <ProductFigure>
                    <ProductImage src={oma.image} />
                </ProductFigure>
                <ProductHeader>{oma.name}</ProductHeader>
            </ProductContainer>
        </Link>
    );
};

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        addToCart: (item: any) => dispatch(addToCart(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OmaCard);
