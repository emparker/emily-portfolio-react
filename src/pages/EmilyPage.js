import React from 'react';
//components
import PageTab from '../components/PageTab';
//styles
import { EmilyContainer } from './styles'



export default function EmilyPage({tabName}) {

    return (
        <EmilyContainer id="about">
            <PageTab tab={tabName}/> 
        </EmilyContainer>
    )
}

/* CSS HEX */
// --smoky-black: #14110fff;
// --jet: #34312dff;
// --gray-web: #7e7f83ff;
// --almond: #d9c5b2ff;
// --cultured: #f3f3f4ff;;
// --almond: #d9c5b2ff;
// --cultured: #f3f3f4ff;