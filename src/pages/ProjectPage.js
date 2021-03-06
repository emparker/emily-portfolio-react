import React from 'react'
//components
import PageTab from '../components/PageTab'
//styles
import { ProjContainer } from './styles'


export default function ProjectPage({tabName}) {

    return (
        <ProjContainer id="projects" >
            <PageTab tab={tabName}/>
        </ProjContainer>
    )

}
