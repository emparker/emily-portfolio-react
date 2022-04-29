import styled from 'styled-components'

export const LandingContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const FernContainer = styled.img`
        /* position: absolute; */
        height: 575px;
        width: 100vw;
        background: #34312dff;
        object-fit: cover;
        opacity: 0.4;
        /* border-bottom: ${props => props.hover ? "inset -10px 0px 10px 40px #00ff00" : ''}; */
`

export const FirstSection = styled.section`
    display: flex;
    flex-direction: row;
     align-items: center;
    justify-content: center;
    background-color: #4F794210;
    /* height: 100vh; */
    width: 100vw;
    
    .emily {
        position: absolute;
        left: 30%;
        top: 10rem;
        object-fit: contain;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background-color: #202020;
        box-shadow: -5em -5em 100px #7e7f8390;
        box-shadow: 0em -5em 150px #6A9E5C40;
        /* border: 1px solid #f3f3f480; */
        /* border-radius: 45%; */
        /* z-index: 1; */
    }
    /* .emily:hover {
        box-shadow: -5em -5em 100px #7e7f8390;
        box-shadow: 0em -5em 150px #6A9E5C40;
    } */
   
`
export const ProjContainer = styled.div`
    position: relative;
    width: 100vw; 
    height: 100vh;
    background-color: #ffffff; 
    color:#013220;
    
`

export const EmilyContainer = styled.div`
    position: relative;
    width: 100vw; 
    height: 100vh;
    background-color: #ffffff; 
    color:#013220;

`

// export const MessageContainer = styled.div`
//     position: absolute;
//     display: flex;
//     flex-direction: row;
//     position: absolute;
//     color: #f3f3f4ff;
//     top: 250px;
        
    /* .hello {
        padding: .4rem;
    }

    .there {
        padding: .4rem;
    } */

    /* h1 {
        padding: 1rem;
    } */

     /* ` */

/* CSS HEX */
// --smoky-black: #14110fff;
// --jet: #34312dff;
// --gray-web: #7e7f83ff;
// --almond: #d9c5b2ff;
// --cultured: #f3f3f4ff;
