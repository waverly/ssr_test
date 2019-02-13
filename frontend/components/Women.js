import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Woman from "./Woman";
import CreateWoman from "./CreateWoman";
import ThreeWomen from "./ThreeWomen";

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
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding-bottom: 300px;
`;

class Women extends Component {
  componentDidUpdate() {
    console.log("women component updated");
  }

  render() {
    return (
      <Center>
        <Query query={ALL_WOMEN_QUERY} refetch={true}>
          {({ data, error, loading }) => {
            console.log("Women component rerendering");
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <Fragment>
                <ThreeWomen women={data.women} />
                {/* <WomenList>
                  {data.women.map(woman => (
                    <Woman woman={woman} key={woman.id} />
                  ))}
                </WomenList> */}
                <CreateWoman />
              </Fragment>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Women;
export { ALL_WOMEN_QUERY };
