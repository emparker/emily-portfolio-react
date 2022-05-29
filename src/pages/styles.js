import styled from 'styled-components'

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    .page-div {
        padding: 100px;
        /* background: -webkit-linear-gradient(to bottom, #55aa65, #ebff40);
        background: linear-gradient(to bottom, #55aa65, #ebff40); */
        /* background-image: linear-gradient( #ebff40, #3ac450); */
        background-color: #4F794210;
        height: 100vh;
        width: 100vw;
    }
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
    position: relative;
    background-color: #4F794210;
    height: 100vh;
    width: 100vw;
    .emily {
        position: absolute;
        left: 10%;
        top: -36rem;
        object-fit: contain;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: #202020;
        box-shadow: -8em 0 0 #687e82;
        /* 6A9E5C40 */
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
    /* width: 100vw; 
    height: 100vh; */
    background-color: #ffffff; 
    color:#013220;
    
`

export const EmilyContainer = styled.div`
    position: relative;
    /* width: 100vw; 
    height: 100vh; */
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
