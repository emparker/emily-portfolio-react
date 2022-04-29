import styled from 'styled-components'


export const PageTabContainer = styled.div`
    .projects {
        position: absolute;
        top: 0;
        margin: auto;
        margin-bottom: 100px;
        width: 80%;
    }
    .arrow-right {
        width: 0; 
        height: 0; 
        border-top: 118px solid transparent;
        border-bottom: 118px solid transparent;
        /* border-left: 160px solid #93454580; */
        position: absolute;
        top: 0;
        border-left: 160px solid #93454580;
    }
    .projects-txt {
        color: #013220;
        font-size: 8rem;
        text-shadow: 2px 2px #93454580;
        padding-left: 20px;      
        transform: rotate(-10deg);
    }
`

export default function PageTab() {


    return (

        <PageTabContainer>
                <div class="arrow-right"/>
                <h1 class="projects-txt">Projects</h1>
        </PageTabContainer>
    )
}