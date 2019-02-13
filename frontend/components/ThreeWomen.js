import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Woman from "./Woman";

const Center = styled.div`
  text-align: center;
`;

const WomenList = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding-bottom: 300px;
`;

class ThreeWomen extends Component {
  componentDidUpdate() {
    console.log("inside of three women");
  }

  render() {
    return (
      <WomenList>
        {this.props.women.map(woman => (
          <Woman woman={woman} key={woman.id} />
        ))}
      </WomenList>
    );
  }
}

export default ThreeWomen;
