import React, { useEffect, useState } from 'react'

//components
import Navbar from '../components/navigation/Navbar'
import TextAnimation from '../animations/TextAnimation'
import EmilyPage from './EmilyPage'
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
                <Navbar />
                
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
                
                <div className='page-div' >
                    <ProjectPage id='projects'/>

                    <EmilyPage id='about'/>
                </div>
            
            </LandingContainer>
        </>
    )
}