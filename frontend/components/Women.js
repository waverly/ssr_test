import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Woman from "./Woman";

const ALL_WOMEN_QUERY = gql`
  query ALL_WOMEN_QUERY {
    women {
      id
      name
      description
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const WomenList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_WOMEN_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <WomenList>
                {data.women.map(woman => (
                  <Woman woman={woman} key={woman.id} />
                ))}
              </WomenList>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };