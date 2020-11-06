import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ApplicationState } from "../store";
import { Oma } from "../store/oma/types";
import { Cart } from "../store/booking/types";
import { Button } from "@chakra-ui/core";

const NavContainer = styled.div`
  width: 100%;
  height: 50px;
  /* position: fixed; */
  background: #e7e8eb;
  margin: auto;
`;

const NavHeader = styled.div`
  width: 80%;
  float: left;
  padding: 10px;
`;

const NavLogin = styled.div`
color: red;
display: inline-block;
font-size: 20px;
line-height: 1;
padding: 3px 7px;
text-align: center;
vertical-align: middle;
white-space: nowrap;
`;


const NavMenu = styled.div`
color: white;
display: inline-block;
font-size: 20px;
line-height: 1;
padding: 3px 7px;
text-align: center;
vertical-align: middle;
white-space: nowrap;
`;


const myClickHandler = (): void => { /* open modal? */ }

interface propsFromState {
  data: Cart;
  loading: boolean;
  errors?: string;
}

type AllProps = propsFromState;

const Menu: React.FC<AllProps> = ({ data, loading, errors, children }) => {
  return (
    <div>
      <NavContainer>
        <NavHeader>
          <NavMenu>
          <Link to="/">Home</Link>
          </NavMenu>
          <NavMenu>
          <Link to="/omas">Omas</Link>
          </NavMenu>
          <NavMenu>
          <Link to="/about">How it works</Link>
          </NavMenu>
          <NavMenu>
          <Link to="/about">About</Link>
          </NavMenu>
        </NavHeader>
        <NavLogin>
            <Button onClick={() => myClickHandler()}>Login</Button>
        </NavLogin>
      </NavContainer>
      {children}
    </div>
  );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  data: cart.data,
  loading: cart.loading,
  errors: cart.errors
});

const mapDispatchProps = () => {};

export default connect(mapStateToProps, mapDispatchProps)(Menu);
