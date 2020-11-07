import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Carer from "../models/Carers";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Link } from "react-router-dom";

const CarerContainer = styled.div`
  background-color: #FAFAFA;
  width:344px; 
  display:inline-block; 
  height:131px; 
  margin-right:10px; 
  padding:0; 
`;

const CarerImageCell = styled.div`
  display:table-cell; 
  vertical-align:middle; 
  width:131px; 
  margin:0; 
  padding:0;   
  height:131px; 
`;

const CarerImage = styled.img`
  width:131px; 
  height:131px; 
`;

const CarerContentCell = styled.div`
  display:table-cell; 
  vertical-align:middle; 
  width:280px; 
  padding:0 10px; 
`;

const CarerHeader = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
`;


const CarerPrice = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;
`;


const CarerDescription = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;
`;

interface propsFromComponent {
  carer: Carer;
}

interface propsFromDispatch {
}

type Props = propsFromComponent & propsFromDispatch;

const CarerCard: React.FC<Props> = ({ carer }) => {
  return (
    <Link to={"/carers/" + carer.id}>
      <CarerContainer>
        <CarerImageCell>
          <CarerImage src={'/images/' + carer.image} />
        </CarerImageCell>
        <CarerContentCell>
          <CarerHeader>{carer.title}</CarerHeader>
          <CarerPrice>€ {carer.price}</CarerPrice>
          <CarerDescription>{carer.description}</CarerDescription>
        </CarerContentCell>
      </CarerContainer>
    </Link>
  );
};

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarerCard);
