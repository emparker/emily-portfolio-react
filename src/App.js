import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProjectPage from './pages/ProjectPage'
import EmilyPage from './pages/EmilyPage'

// import styles
import { GlobalStyle } from './common/styles/GlobalStyle';

export default function App() {
  return (
    <div className="App">

      <GlobalStyle />
        <Routes>
            <Route path='/' element={<LandingPage />} />
            {/* <Route path='/projects' element={<ProjectPage />} /> */}
            {/* <Route path='/about' element={<EmilyPage />} /> */}
        </Routes>
      {/* <LandingPage /> */}

    </div>
  )
}