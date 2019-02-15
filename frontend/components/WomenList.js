import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import {
  WomenListWrap,
  Container,
  ContainerTop,
  InnerWrap
} from "./styles/WomenList";

// x needs to always be

// t.clientX,
// t.clientY;
// var e = window.innerWidth
//   , i = window.innerHeight
//   , n = (t.clientX - e / 2) / 100
//   , r = (t.clientY - i / 2) / 10;
// console.log(n, r),
// TweenMax.to($(".item-top"), .5, {
//     rotationX: r,
//     ease: Power4.easeOut
// }),
// TweenMax.to($(".item-bottom"), .5, {
//     rotationX: r,
//     ease: Power4.easeOut
// }),
// TweenMax.to($(".main-container"), .5, {
//     rotationY: n,
//     ease: Power4.easeOut
// })

class WomenList extends Component {
  state = {
    scrollTop: 0
  };

  componentDidMount() {
    if (typeof window === "undefined") {
      return 0;
    } else if (typeof window != "undefined") {
      if (document.getElementById("womanList")) {
        const womanListHeight = document.getElementById("womanList")
          .offsetHeight;
        document.body.style.height = womanListHeight + "px";
        document.addEventListener("scroll", this._throttleScroll);
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
    console.log("runningonScroll");

    const bodyScrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    this.setState({ scrollTop: bodyScrollTop });
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
        //   style={{
        //     transform: `skew(${this.props.x * 10}deg)`
        //   }}
        >
          <ContainerTop
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
          </ContainerTop>
          <Container>
            <InnerWrap
              style={{
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
  matrix3DVal1: 0,
  matrix3DVal2: 0
};

export default WomenList;
