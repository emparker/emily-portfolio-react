import React from 'react'

//import styles
import { Wrapper } from './styles'

export default function TextAnimation() {

    const hello = 'Hello'.split('')
    const there = 'There.'.split('')


    return (

        <Wrapper>
            {hello.map((char, index) => (
            <span key={index}>{char}</span>
        ))}
        <br/>
            {there.map((char, index) => (
            <span key={index}>{char}</span>
        ))}
        </Wrapper>
    )
}
