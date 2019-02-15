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
  }

  .womanItem {
    width: 100%;
    background: ${props => props.theme.green};
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transform: translate3d(0, 0, 0);

    h1 {
      color: black;
      text-transform: uppercase;
    }
  }
`;

export const ContainerTop = styled.div`
  height: calc(100vh / 3);
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

export const Container = styled.div`
  height: calc(100vh / 3);
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

export const InnerWrap = styled.div`
  margin-top: ${props =>
    props.order ? `calc((-100vh / 3) * ${props.order});` : "0"};
`;
