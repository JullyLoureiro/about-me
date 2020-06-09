import React from 'react'
import ImgExperience from '../../assets/experience.png'
import './style.css'
import {pink} from '../../baseColors/colors'
import {Grid} from '@material-ui/core'

export default function Experience(){
    const Description = (props) => (
        <div>
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
        <Grid container className='containerExperience'>
            <Grid item xs={12} md={12}>
                <div class="scrolling-wrapper-flexbox">
                    <div class="card">
                            <ExperienceTitle title={'Desenvolvedora Júnior | JD System'}/>
                            <Period title={'JULHO/2020 – ATUALMENTE'} />
                            <Description title={'Criação e manutenção de aplicações mobile nativo para a plataforma android'}  />
                            <Description title={'Responsável pela publicação e atualização dos aplicativos na play store.'} />
                            <Description title={'Desenvolvimento de sistemas web atuando como Front-end utilizando o framework ReactJS.'} />
                            <Description title={'Desenvolvimento e manutenção de aplicações híbridas utilizando o framework react native'} />
                    </div>
                    <div class="card">
                        <span className='experience'>Assistente de Programação | JD System</span>
                    </div>
                    <div class="card">
                        <span className='experience'>Estagiária no Setor Mobile | JD System</span>
                    </div>
                    <div class="card">
                        <span className='experience'>Estagiária no Setor de Gerência de Portal e Programação Visual | MPRJ</span>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}