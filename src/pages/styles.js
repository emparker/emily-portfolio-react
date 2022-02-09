import styled from 'styled-components'

export const LandingContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    background: #34312dff;
    /* background: #d9c5b2ff; */
    height: 575px;

    
    `

export const FirstSection = styled.section`
    display: flex;
    flex-direction: column;
    
    
    .emily {
        position: absolute;
        left: 6rem;
        top: 27.5rem;
        object-fit: contain;
        height: 700px;
        width: auto;
        border: 1px solid #f3f3f4ff;
        border-radius: 15px;
        z-index: 1;
        /* box-shadow: -1em -.8em 100px #7e7f83ff; */
        /* margin-left: 8rem; */
    }
    .emily:hover {
        box-shadow: -1em -.8em 500px #7e7f83ff;
    }

    .emily-div {
        position: absolute;
        background-color: #f3f3f4ff;
        left: 6rem;
        top: 275px;
        height: 700px;
        width: 100%;
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

// `

/* CSS HEX */
// --smoky-black: #14110fff;
// --jet: #34312dff;
// --gray-web: #7e7f83ff;
// --almond: #d9c5b2ff;
// --cultured: #f3f3f4ff;
