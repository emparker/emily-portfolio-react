import styled from 'styled-components'

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    /* justify-content: space-between; */
    /* background: #34312dff; */
    /* background: #d9c5b2ff; */
    height: 100vh;    
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
    position: absolute;
    position: relative;
    display: flex;
    flex-direction: column;
    
    .emily {
        position: absolute;
        left: 6rem;
        top: 20rem;
        object-fit: contain;
        height: 700px;
        width: auto;
        border: 1px solid #f3f3f4ff;
        border-radius: 15px;
        z-index: 1;
    }
    .emily:hover {
        box-shadow: -5em -5em 100px #7e7f8390;
        box-shadow: 0em -5em 150px #6A9E5C40;
    }

    .emily-div {
        /* position: absolute; */
        background-color: #f3f3f4ff;
        left: 6rem;
        top: 275px;
        height: 150px;
        width: 150px;
        border-radius: 15px;
        z-index: -1
    }
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
