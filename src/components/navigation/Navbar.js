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
            <a href='#' className='name'>Emily Parker | Web Developer</a>
            <LinkContainer>
                    <Link to='/about' className='nav-link'>About Emily</Link>                                                             
                    <Link to='/experience' className='nav-link'>Experience</Link>                                                  
                    <Link to='/maybe-projects' className='nav-link'>Projects</Link>                                                  
                    <Link to='/education' className='nav-link'>Education</Link>                                                  
                    <Link to='/contact' className='nav-link'>Contact!</Link>                    
            </LinkContainer>
        </NavStyled>
    )
}
            