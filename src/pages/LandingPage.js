import React from 'react'

//components
import Navbar from '../components/navigation/Navbar'

//images
import emPic from '../images/em-pic.jpg'

//styles
import { LandingContainer } from './styles'

export default function LandingPage () {


    return (
        <LandingContainer>
            <Navbar />
            <img src={emPic} alt='emily' className='emily'/>
        </LandingContainer>
    )
}