import React, { useState, useRef, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'

//components
import ContactPop from '../ContactPop'
//images
// import cloud from '../../images/cloud-with-flat-base.svg'

// import styles
import { NavStyled, LinkContainer } from './styles'


const useContactPop = (ref) => {
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                // setShowContact(false)
                console.log("HERE?", ref.current)
            }
        }
        return (
            handleClick
        )
       
    },[ref])
  
}

export default function Navbar(props) {
    const refWrap = useRef()
    const [ showContact, setShowContact ] = useState(false)

    return (
            <NavStyled>
                <a href='#' className='e-parker'>Emily Parker | Web Developer</a>
                <LinkContainer  ref={refWrap} >
                        <li><Link activeClass="active" to='about' spy={true} smooth={true} className='nav-link'>About</Link></li>                                                             
                        {/* <li><Link activeClass="active" to='experience' spy={true} smooth={true} className='nav-link'>Experience</Link></li>                                                 */}
                        <li><Link activeClass="active" to='projects' spy={true} smooth={true} className='nav-link'>Projects</Link></li>                                               
                        <li><Link onClick={(e) => setShowContact(!showContact)} className='nav-link'>Contact!</Link></li>
                        {/* activeClass="active" to='contact' spy={true} smooth={true} */}
                </LinkContainer>
                <div ref={refWrap}>
                    { showContact && <ContactPop tabName="Contact"/> }
                </div>
                <div className="blank-div"></div>
            </NavStyled>       
    )
}
            