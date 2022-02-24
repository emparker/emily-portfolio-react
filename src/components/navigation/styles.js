import styled from 'styled-components'


export const NavStyled = styled.header`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 10rem;
    background-color: #14110fff;
    padding: 0 5rem 0 5rem;
    /* bottom: 4rem; */
    border: 1px solid #f3f3f4ff;
    border-radius: 50px;

    /* .cloud {
        position: absolute;
        height: 50px;
        width: 50px;
        top: 300px;
        right: 300px;
        background-color: yellow;
    } */
    .name {
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
    }
`

export const LinkContainer = styled.ul`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 45rem;

    .nav-link {
        text-decoration: none;
        font-size: 1.6rem;
        color: #f3f3f4ff;
        
    }
    .nav-link:hover {
        color: #d9c5b2ff;
        cursor: pointer;
    }
`


/* CSS HEX */
// --smoky-black: #14110fff;
// --jet: #34312dff;
// --gray-web: #7e7f83ff;
// --almond: #d9c5b2ff;
// --cultured: #f3f3f4ff;
