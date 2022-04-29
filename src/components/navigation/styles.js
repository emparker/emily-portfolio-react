import styled from 'styled-components'


export const NavStyled = styled.header`
    /* position: absolute; */
    display: flex;
    width: 100%;
    margin: auto;
    padding: 0 5rem 0 5rem;
    
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 450px;
    width: 100vw;
    border-radius: 15px;
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

export const LinkContainer = styled.ul`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 45rem;
    margin-top: 2rem;
    padding-left: 22rem;

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
