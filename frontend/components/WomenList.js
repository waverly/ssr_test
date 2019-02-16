import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import {
  WomenListWrap,
  Container,
  ContainerTop,
  InnerWrap
} from "./styles/WomenList";

class WomenList extends Component {
  state = {
    scrollTop: 0
  };

  componentDidMount() {
    if (typeof window === "undefined") {
      return 0;
    } else if (typeof window != "undefined") {
      console.log("state scrolltop is ", this.state.scrollTop);
      if (document.getElementById("womanList")) {
        const womanListHeight = document.getElementById("womanList")
          .offsetHeight;
        document.body.style.height = womanListHeight + "px";
        document.body.scrollTop = 0;
        this.setState({ scrollTop: 0 });

        document.addEventListener("scroll", this._onScroll);
      }
    }
  }

  componentWillUnmount() {
    if (typeof window === "undefined") {
      return 0;
    } else if (typeof window != "undefined") {
      document.removeEventListener("scroll", this._throttleScroll);
    }
  }

  _onScroll = e => {
    console.log(this.state.scrollTop);
    const bodyScrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    if (bodyScrollTop > 5) {
      console.log("runningonScroll");
      this.setState({ scrollTop: bodyScrollTop });
    }
  };

  _throttleScroll = _.throttle(this._onScroll, 100);

  render() {
    if (this.props.women) {
      const allWomen = this.props.women.map(woman => {
        return (
          <div className="womanItem" key={woman.id}>
            <h1>{woman.name}</h1>
          </div>
        );
      });

      const containers = (
        <WomenListWrap
          style={{
            transform: `skew(${this.props.x * 2}deg)`
          }}
        >
          <Container
            style={{
              //   transform: `rotateX(${this.props.y * -1}deg)`
              transformOrigin: `bottom center`,
              transform: `matrix3d(
                1,
                0,
                0,
                0,
                0,
                ${this.props.matrix3DVal2},
                ${this.props.matrix3DVal1},
                0,
                0,
                ${this.props.matrix3DVal1 * -1},
                ${this.props.matrix3DVal2},
                0,
                0,
                0,
                0,
                1
              )`
            }}
          >
            <InnerWrap
              order={0}
              style={{
                transform: `translate3d(0px, -${this.state.scrollTop}px, 0px)`
              }}
              id="womanList"
              className="womenWrapper"
            >
              {allWomen}
            </InnerWrap>
          </Container>
          <Container>
            <InnerWrap
              style={{
                position: `relative`,
                zIndex: `10`,
                transform: `translate3d(0px, -${this.state.scrollTop}px, 0px)`
              }}
              order={1}
              className="womenWrapper"
            >
              {allWomen}
            </InnerWrap>
          </Container>
          <Container
            // transform: matrix3d(1, 0, 0, 0, 0, 0.740218, -0.672367, 0, 0, 0.672367, 0.740218, 0, 0, 0, 0, 1);
            style={{
              //   transform: `rotateX(${this.props.y * -1}deg)`
              transformOrigin: `top center`,
              transform: `matrix3d(
                  1,
                  0,
                  0,
                  0,
                  0,
                  ${this.props.matrix3DVal2},
                  ${this.props.matrix3DVal1},
                  0,
                  0,
                  ${this.props.matrix3DVal1 * -1},
                  ${this.props.matrix3DVal2},
                  0,
                  0,
                  0,
                  0,
                  1
                )`
            }}
          >
            <InnerWrap
              style={{
                transform: `translate3d(0px, -${this.state.scrollTop}px, 0px)`
              }}
              order={2}
              className="womenWrapper"
            >
              {allWomen}
            </InnerWrap>
          </Container>
        </WomenListWrap>
      );

      return containers;
    } else return null;
  }
}

// Set default props
WomenList.defaultProps = {
  x: 0,
  y: 0,
  matrix3DVal1: 0.18,
  matrix3DVal2: 0.89
};

export default WomenList;
