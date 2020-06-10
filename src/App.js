import React from 'react'
import { FullPage, Slide } from 'react-full-page'
import './App.css'
import Apresentation from './pages/Apresentation/Apresentation'
import Education from './pages/Education/Education'
import Skills from './pages/Skills/Skills'
import Experience from './pages/Experience/Experience'
import CustomControls from './components/CustomControls/CustomControls'

export default function FullPageExampleCustomControls() {
  const baseStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div>
       <FullPage controls={CustomControls}>
        <Slide style={{...baseStyle}}>
          <Apresentation />
        </Slide>
        
        <Slide style={{ ...baseStyle}}>
            <Experience />
        </Slide>
        
        <Slide style={{ ...baseStyle}}>
            <Education />
        </Slide>
        
        <Slide style={{ ...baseStyle}}>
          <Skills />
        </Slide>
        
        <Slide style={{ ...baseStyle}}>
          <h1>5</h1>
        </Slide>
      </FullPage>
    </div>
  
  );
}