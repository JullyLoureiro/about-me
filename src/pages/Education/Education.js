import React from 'react'
import ImgEducation from '../../assets/education.png'
import './style.css'
import {Grid} from '@material-ui/core'

export default function Education(){
    return (
        <Grid container className='containerEducation'>
            <Grid item xs={12} md={6}>
                <div className='infoEducation'>
                    <span className='education'>FORMAÇÃO ACADÊMICA</span>
                    <span>Bacharel em Sistemas de Informações | Universidade LaSalle RJ</span>
                    <span>MARÇO/2015 – JULHO/2019 </span>
                    <br />

                    <span className='destaque'>* Prêmio de Destaque Acadêmico por um dos maiores coeficientes de rendimento entre os formandos do semestre de 2019, do curso de Sistemas de Informação da Unilasalle RJ.</span>
                </div>
            </Grid>
            <Grid item xs={12} md={6} className='gridImage'>
                <img className='imageEducation' src={ImgEducation}/>
            </Grid>
        </Grid>
    )
}