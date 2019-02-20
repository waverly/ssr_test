import styled from "styled-components";

export const WomenListWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* width: 100%;
  height: 100vh; */

  width: 80vw;
  left: 10vw;
  top: 0vh;
  height: 90vh;
  -webkit-perspective: 200px;
  perspective: 200px;

  .womenWrapper {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    will-change: transform;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    padding-bottom: 5%;
  }

  .womanItem {
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transform: translate3d(0, 0, 0);

    h1 {
      color: black;
      text-transform: uppercase;
      font-size: 6vw;
      font-weight: 900;
      -webkit-text-stroke-width: 4px;
      -webkit-text-stroke-color: ${props => props.theme.green};
    }
  }
`;

export const Container = styled.div`
  height: calc(100vh / 3);
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 2px solid red;
`;

export const InnerWrap = styled.div`
  margin-top: ${props =>
    props.order ? `calc((-100vh / 3) * ${props.order});` : "0"};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#111111),
      to(rgba(17, 17, 17, 0))
    );
    background: -webkit-linear-gradient(top, #111111, rgba(17, 17, 17, 0));
    background: -o-linear-gradient(top, #111111, rgba(17, 17, 17, 0));
    background: linear-gradient(to bottom, #111111, rgba(17, 17, 17, 0));
    z-index: 1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;
