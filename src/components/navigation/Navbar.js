import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'

//images
import cloud from '../../images/cloud-with-flat-base.svg'

// import styles
import { NavStyled, LinkContainer } from './styles'



export default function Navbar() {

    return (
        <NavStyled>
            {/* <img src={cloud} alt='cloud' className='cloud'/> */}
            {/* <a href='#' className='name'>Emily Parker | Web Developer</a> */}
            
            <LinkContainer>
                    <Link to='about' spy={true} smooth={true} className='nav-link'>About</Link>                                                             
                    <Link to='experience' spy={true} smooth={true} className='nav-link'>Experience</Link>                                                  
                    <Link to='maybe-projects' spy={true} smooth={true} className='nav-link'>Projects</Link>                                                  
                    <Link to='contact' spy={true} smooth={true} className='nav-link'>Contact!</Link>                    
                    {/* <Link to='/about' className='nav-link'>About Emily</Link>                                                             
                    <Link to='/experience' className='nav-link'>Experience</Link>                                                  
                    <Link to='/maybe-projects' className='nav-link'>Projects</Link>                                                  
                    <Link to='/contact' className='nav-link'>Contact!</Link>  */}
            </LinkContainer>
        </NavStyled>
    )
}
            