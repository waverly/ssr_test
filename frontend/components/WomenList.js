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

const calcX = x => {
  if (typeof window === "undefined") {
    return 0;
  } else {
    if (x) {
      const center = window.innerWidth / 2;
      const distFromCenter = x - center;

      const decimal = distFromCenter / center;

      // number between .7 and .9
      const randVal = Math.floor(decimal * 0.9) + 0.7;

      console.log((x - window.innerWidth / 2) / 100);

      return (x - window.innerWidth / 2) / 100;
    } else return 30;
  }
};

const calcY = y => {
  if (typeof window === "undefined") {
    return 0;
  } else {
    if (y) {
      const center = window.innerHeight / 2;
      const distFromCenter = y - center;

      return (y - window.innerHeight / 2) / 40;
    } else return 0;
  }
};

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
      document.removeEventListener("scroll", this._onScroll);
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
    // if (typeof window === "undefined") {
    //   return 0;
    // } else if (typeof window != "undefined") {
    //   document.addEventListener("scroll", this._throttleScroll);
    // }

    if (this.props.women) {
      const transform = {
        x: calcX(this.props.x),
        y: calcY(this.props.y)
      };

      console.log(transform);

      const allWomen = this.props.women.map(woman => {
        return (
          <div className="womanItem" key={woman.id}>
            <h1>{woman.name}</h1>
          </div>
        );
      });

      const containers = (
        <WomenListWrap>
          <ContainerTop transform={transform}>
            <InnerWrap
              order={0}
              scroll={this.state.scrollTop}
              id="womanList"
              className="womenWrapper"
            >
              {allWomen}
            </InnerWrap>
          </ContainerTop>
          <Container>
            <InnerWrap
              order={1}
              scroll={this.state.scrollTop}
              className="womenWrapper"
            >
              {allWomen}
            </InnerWrap>
          </Container>
          <Container>
            <InnerWrap
              order={2}
              scroll={this.state.scrollTop}
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

export default WomenList;
