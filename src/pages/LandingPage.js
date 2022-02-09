import React from 'react'

//components
import Navbar from '../components/navigation/Navbar'
import TextAnimation from '../animations/TextAnimation'

//images
import emPic from '../images/em-pic.jpg'

//styles
import { LandingContainer, MessageContainer, FirstSection } from './styles'

export default function LandingPage () {

    // const picture = $('picture')
    // const speechBubble = $('speechBubble')

    return (
        <>
            <LandingContainer>
                <Navbar />
                <FirstSection>
                    <img src={emPic} alt='emily' className='emily' id='picture' /> 
                    
                    {/* <MessageContainer>
                        <div className='hello'>
                            <h1>H</h1>
                            <h1>E</h1>
                            <h1>L</h1>
                            <h1>L</h1>
                            <h1>O</h1>
                        </div>
                        <div className='there'>
                            <h1>T</h1>
                            <h1>H</h1>
                            <h1>E</h1>
                            <h1>R</h1>
                            <h1>E</h1>
                        </div>
                    </MessageContainer> */}
                    <div className='emily-div' />
                </FirstSection>
                    {/* <div id='speech-bubble'> Well Hello There </div> */}
            </LandingContainer>
            <TextAnimation />
        </>
    )
}