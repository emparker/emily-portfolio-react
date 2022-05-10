import React from 'react'
//components
import PageTab from '../components/PageTab'
//styles
import { ProjContainer } from './styles'


export default function ProjectPage({id}) {
    console.log(id)

    return (
        <ProjContainer id="projects" >
            <PageTab tabName={id}/>
        </ProjContainer>
    )

}
