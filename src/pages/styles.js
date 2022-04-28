import styled from 'styled-components'

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    /* justify-content: space-between; */
    /* background: #34312dff; */
    /* background: #d9c5b2ff; */
    /* height: 100vh;     */
    /* height: 100vw; */
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
    /* position: absolute; */
    /* position: relative; */
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

    .emily-div {
        /* position: relative; */
        display: flex;
        align-items: center;
        justify-content: center;
        height: 450px;
        width: 100vw;
        border-radius: 15px;
        /* z-index: -1 */
    }
   
    .e-parker {
        /* color: white;
        font-size: 4rem;  */
        font-size: 3.2rem;
        color: #f3f3f4ff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
            to right,
            #d9c5b2ff,
            #d9c5b2ff 50%,
            #f3f3f4ff 50%);
            background-size: 200% 100%;
            background-position: 100%;
            :hover {
                transition: all 1s cubic-bezier(0.000, 0.000, 0.230, 1);
        background-position: 0%;
            }
            
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
