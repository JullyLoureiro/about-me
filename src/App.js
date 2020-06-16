import React from 'react'
import { FullPage, Slide } from 'react-full-page'
import './App.css'
import Apresentation from './pages/Apresentation/Apresentation'
import Education from './pages/Education/Education'
import Skills from './pages/Skills/Skills'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import CustomControls from './components/CustomControls/CustomControls'

export default function FullPageExampleCustomControls() {
  const baseStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  };

  const Description = (props) => (
    <div className='divDescription'>
        <span className='description'>{props.title}</span>
    </div>
  )

    const Period = (props) => (
        <div>
            <span className='period'>{props.title}</span>
        </div>
    )

    const ExperienceTitle = (props) => (
        <span className='experience'>{props.title}</span>
    )

  return (
    <div>
       <FullPage controls={CustomControls}>
        <Slide style={{...baseStyle}}>
          <Apresentation />
        </Slide>
        
        <Slide style={{ ...baseStyle}}>
            <Experience>
                <div class="card">
                    <ExperienceTitle title={'Desenvolvedora Júnior | JD System'}/>
                    <Period title={'JULHO/2020 – ATUALMENTE'} />
                    <Description title={'Desenvolvimento de sistemas web atuando como Front-end utilizando o framework ReactJS.'} />
                    <Description title={'Manutenção de aplicações híbridas utilizando o framework React Native.'} />
                    <Description title={'Manutenção de aplicações mobile nativo para a plataforma Android.'}  />
                    <Description title={'Responsável pela publicação e atualização dos aplicativos na Play Store.'} />
                </div>
            </Experience>
        </Slide>

        <Slide style={{ ...baseStyle}}>
            <Experience>
                <div class="card">
                    <ExperienceTitle title={'Assistente de Programação | JD System'}/>
                    <Period title={'ABRIL/2020 – JULHO/2020'} />
                    <Description title={'Desenvolvimento de sistemas web atuando como Front-end utilizando o framework ReactJS.'} />
                    <Description title={'Manutenção de aplicações mobile nativo para a plataforma utilizando a linguagem de programação Java.'} />
                    <Description title={'Responsável pela publicação e atualização dos aplicativos na play store.'}  />
                    <Description title={'Desenvolvimento e manutenção de aplicações híbridas utilizando o framework React Native.'} />
                    <Description title={'Vivência na manutenção de sistema web desenvolvido em C# ASP.NET.'} />
                </div>
            </Experience>
        </Slide>

        <Slide style={{ ...baseStyle}}>
            <Experience>
                <div class="card">
                    <ExperienceTitle title={'Estagiária no Setor Mobile | JD System'}/>
                    <Period title={'NOVEMBRO/2017 – ABRIL/2020'} />
                    <Description title={'Desenvolvimento de aplicações mobile nativo para a plataforma Android.'} />
                    <Description title={'Manutenção e correção de possíveis bugs apresentados nos aplicativos desenvolvidos.'} />
                    <Description title={'Responsável pela publicação e atualização dos aplicativos na play store.'}  />
                </div>
            </Experience>
        </Slide>

        <Slide style={{ ...baseStyle}}>
            <Experience>
                <div class="card">
                    <ExperienceTitle title={'Estagiária no Setor de Gerência de Portal e Programação Visual | MPRJ'}/>
                    <Period title={'MAIO/2017 – NOVEMBRO/2017'} />
                    <Description title={'Criação/ Reformulação/ Atualização de páginas e conteúdos do Portal.'} />
                    <Description title={'Criação de templates para envio de mensagens internas.'} />
                    <Description title={'Desenvolvimento de portlets para a publicação de conteúdo no portal do MPRJ.'}  />
                </div>
            </Experience>
        </Slide>

        <Slide style={{ ...baseStyle}}>
            <Education />
        </Slide>
        
        <Slide style={{ ...baseStyle}}>
          <Skills />
        </Slide>
        
        <Slide style={{ ...baseStyle}}>
          <Projects />
        </Slide>
      </FullPage>
    </div>
  
  );
}