import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import { WomenListWrap, Container, InnerWrap } from "./styles/WomenList";

const calcX = x => {
  if (typeof window === "undefined") {
    return 0;
  } else {
    // measure centerpoint
    const winWidth = window.innerWidth;
    const center = winWidth / 2;
    const distFromCenter = x - center;
  }
};

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
    if (typeof window === "undefined") {
      return 0;
    } else if (typeof window != "undefined") {
      document.addEventListener("scroll", this._throttleScroll);
    }

    if (this.props.women) {
      const allWomen = this.props.women.map(woman => {
        return (
          <div className="womanItem" key={woman.id}>
            <h1>{woman.name}</h1>
          </div>
        );
      });

      const containers = (
        <WomenListWrap>
          <Container>
            <InnerWrap
              order={0}
              scroll={this.state.scrollTop}
              id="womanList"
              className="womenWrapper"
            >
              {allWomen}
            </InnerWrap>
          </Container>
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
