import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Woman from "./Woman";
import CreateWoman from "./CreateWoman";
import ThreeWomen from "./ThreeWomen";
import WomenList from "./WomenList";
import { Manifesto } from "./Manifesto";

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
  position: relative;
  width: 100vw;
`;

const ManifestoWrapper = styled.button`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => (props.display ? "block" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  .module {
    width: 70%;
    height: 70%;
    color: white;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    margin: 0 auto;
  }

  h1 {
    color: ${props => props.theme.green};
  }
`;

class Women extends Component {
  state = {
    x: null,
    y: null,
    displayManifesto: true
  };

  _onMouseMove = e => {
    this.setState({ x: e.screenX, y: e.screenY });
  };

  _closeManifesto = () => {
    this.setState({ displayManifesto: false });
  };

  render() {
    return (
      <Center onMouseMove={this._onMouseMove}>
        {/* <ManifestoWrapper
          display={this.state.displayManifesto}
          onClick={this._closeManifesto}
        >
          <div className="module">
            <h1>
              <em>Today is International Woman's Day.</em>
            </h1>
            <p>
              Why is this day important? Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </ManifestoWrapper> */}

        <Query query={ALL_WOMEN_QUERY} refetch={true}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <Fragment>
                {/* <ThreeWomen women={data.women} /> */}
                <WomenList
                  women={data.women}
                  x={this.state.x}
                  y={this.state.y}
                />
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
