import styled from 'styled-components'

export const PageTabContainer = styled.div`
    .projects {
        /* position: absolute;
        top: 0;
        margin: auto;
        margin-bottom: 100px;
        width: 80%;
        height: 300px; */
    }
    .arrow-right {
        position: relative;
        /* top: 0; */
        /* width: 0; 
        height: 0;  */
        border-top: 118px solid transparent;
        border-bottom: 118px solid transparent;
        /* border-left: 160px solid #93454580; */
        border-left: 160px solid #687e82;
    }
    .projects-txt {
        position: absolute;
        top: 0;
        color: #013220;
        font-size: 8rem;
        text-shadow: 2px 2px #76cfcf;
        /* #93454580 */
        padding-left: 10px;      
        transform: rotate(-10deg);
    }
`

export default function PageTab() {
    // console.log({tabName})


    return (

        <PageTabContainer>
                <div class="arrow-right"/>
                <h1 class="projects-txt">Projects</h1>
        </PageTabContainer>
    )
}