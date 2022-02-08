import React from 'react'
import { Link } from 'react-router-dom'

//images
import cloud from '../../images/cloud-with-flat-base.svg'

// import styles
import { NavStyled, LinkContainer } from './styles'



export default function Navbar() {

    return (
        <NavStyled>
            {/* <img src={cloud} alt='cloud' className='cloud'/> */}
            <h1 className='name'>Emily Parker | Web Developer</h1>
            <LinkContainer>
                <ul >
                    <Link to='/about' className='nav-link'>About Emily</Link>                               
                </ul>
                <ul >
                    <Link to='/experience' className='nav-link'>Experience</Link>                    
                </ul>
                <ul >
                    <Link to='/maybe-projects' className='nav-link'>Projects</Link>                    
                </ul>
                <ul >
                    <Link to='/education' className='nav-link'>Education</Link>                    
                </ul>
                <ul >
                    <Link to='/contact' className='nav-link'>Contact!</Link>                    
                </ul>
            </LinkContainer>
        </NavStyled>
    )
}
            