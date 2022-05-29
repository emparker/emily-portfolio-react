import styled from 'styled-components'


export const NavStyled = styled.header`
    display: flex;
    width: 100vw;
    margin: auto;
    margin-top: 0rem;
    padding: 5rem 5rem 0 5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    .blank-div {
        height: 20rem;
        width: 100vw;
        margin-top: 15rem;
        /* background: -webkit-linear-gradient(to bottom, #ebff40, #54ff59);
        background: linear-gradient(to bottom, #ebff40, #54ff59); 
        background-image: linear-gradient( #ebff40, #4F794210); */
        background-color: #687e82;
    }
    /* .name {
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
    }
    .name:hover {
        transition: all 1s cubic-bezier(0.000, 0.000, 0.230, 1);
        background-position: 0%;
    } */
    .e-parker {
        border-bottom: 1px solid #f3f3f480;
        width: 50%;
        padding-left: 11rem;
        /* color: white;
        font-size: 4rem;  */
        font-size: 3.2rem;
        color: #d59a4a;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
            to right,
            #ebff40,
            #ebff40 50%,
            #d59a4a 50%);
            background-size: 200% 100%;
            background-position: 100%;
            :hover {
                transition: all 1s cubic-bezier(0.000, 0.000, 0.230, 1);
                background-position: 0%;
            }            
    }
`

export const LinkContainer = styled.ul`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 45rem;
    margin-top: 2rem;
    padding-left: 22rem;
    list-style-type: none;

    .nav-link {
        font-size: 1.6rem;
        color: #f3f3f4ff;
        display: block;
    }
    .nav-link:hover {
        color: #76cfcf;
        cursor: pointer;
        transition: all .2s ease-in-out;
        -webkit-transform: scale(1.2);
    }
`
/* CSS HEX */
// --smoky-black: #14110fff;
// --jet: #34312dff;
// --gray-web: #7e7f83ff;
// --almond: #d9c5b2ff;
// --cultured: #f3f3f4ff;
