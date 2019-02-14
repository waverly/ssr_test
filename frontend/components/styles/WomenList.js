import styled from "styled-components";

export const WomenListWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  -webkit-perspective: 150px;
  perspective: 150px;

  .womenWrapper {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    will-change: transform;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .womanItem {
    width: 100vw;
    outline: 1px solid ${props => props.theme.green};
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transform: translate3d(0, 0, 0);

    h1 {
      color: ${props => props.theme.green};
      text-transform: uppercase;
    }
  }
`;

export const Container = styled.div`
  height: calc(100vh / 3);
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 2px solid yellow;
`;

export const InnerWrap = styled.div`
  margin-top: ${props =>
    props.order ? `calc((-100vh / 3) * ${props.order});` : "0"};
  transform: ${props =>
    props.scroll ? `translate3d(0px, -${props.scroll}px, 0px)` : null};
`;
