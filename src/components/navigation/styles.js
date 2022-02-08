import styled from 'styled-components'


export const NavStyled = styled.header`
    /* position: relative; */
    display: flex;
    justify-content: space-between;
    height: 10rem;
    align-items: center;
    background-color: #14110fff;
    padding: 0 5rem 0 5rem;

    .cloud {
        position: absolute;
        height: 50px;
        width: 50px;
        top: 300px;
        right: 300px;
        background-color: yellow;
    }
    .name {
        font-size: 3.2rem;
        color: #f3f3f4ff;
    }
`
export const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 2rem;
    width: 45rem;

    .nav-link {
        text-decoration: none;
        font-size: 1.6rem;
        color: #f3f3f4ff;
        
    }
    .nav-link:hover {
        color: #d9c5b2ff;
    }
`


/* CSS HEX */
// --smoky-black: #14110fff;
// --jet: #34312dff;
// --gray-web: #7e7f83ff;
// --almond: #d9c5b2ff;
// --cultured: #f3f3f4ff;
