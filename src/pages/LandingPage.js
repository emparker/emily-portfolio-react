import React, { useEffect, useState } from 'react'

//components
import Navbar from '../components/navigation/Navbar'
import TextAnimation from '../animations/TextAnimation'
import AboutEmily from '../pages/AboutEmily'
import ProjectPage from '../pages/ProjectPage'

//images
import emPic from '../images/em-pic.jpg'
import fernImg from '../images/pexels-ferns.jpg'

//styles
import { LandingContainer, MessageContainer, FirstSection, FernContainer } from './styles'

export default function LandingPage () {
    const [ showMessage, setShowMessage ] = useState(false)


    const handleHover = () => {
        setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
        }, 6500);
    }


    return (
        <>
            <LandingContainer>
            <FernContainer 
                src={fernImg} 
                alt='ferns' 
                hover={showMessage}
            />
            <FirstSection>
`
                <div className='emily-div' >
                    <a href='#' className='e-parker'>Emily Parker | Web Developer</a>
                    <Navbar />
                </div>
                
                <img src={emPic} 
                    className='emily' 
                    alt='emily' 
                    id='picture' 
                    onMouseOver={handleHover} 
                /> 
                

            {/* { showMessage && (
                <TextAnimation />
            )} */}
            </FirstSection>
            <ProjectPage id='project-page'/>
                {/* <h1 style={{backgroundColor:'yellow'}}>hey</h1> */}
            <AboutEmily id='about'/>
            
            </LandingContainer>
        </>
    )
}