import styled, { keyframes } from "styled-components"


export const animation = keyframes `
    0% { opacity: 0; transform: translateX(-100px) skewY(10deg) skewX(10deg) rotateZ(60deg); filter: blur(10px); }
    25% { opacity: 1; transform: translateY(0) skewY(0) skewX(0) rotateZ(0); filter: blur(0); }
    75% { opacity: 1; transform: translateY(0) skewY(0) skewX(0) rotateZ(0); filter: blur(0); }
    100% { opacity: 0; transform: translateY(-100px) skewY(0) skewX(0) rotateZ(0); filter: blur(10px); }
`

export const Wrapper = styled.span`
    display: inline-block;
    margin-top: 100px;
    margin-left: 600px;

    span {
        display: inline-block;
        font-size: 7rem;
        color: #d9c5b2ff;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 6s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
    }
`



/* CSS HEX */
// --smoky-black: #14110fff;
// --jet: #34312dff;
// --gray-web: #7e7f83ff;
// --almond: #d9c5b2ff;
// --cultured: #f3f3f4ff;