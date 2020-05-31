import React from 'react'
import ImgEducation from '../../assets/education.png'
import './style.css'
import {pink} from '../../baseColors/colors'
import {Grid} from '@material-ui/core'

export default function Education(){
    return (
        <Grid container className='containerEducation'>
            <Grid item xs={12} md={6}>
                <div className='infoEducation'>
                    <span className='education'>FORMAÇÃO ACADÊMICA</span>
                    <span>Bacharel em Sistemas de Informações | Universidade LaSalle RJ</span>
                    <span>MARÇO/2015 – JULHO/2019 </span>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{borderRadius: 300}} src={ImgEducation} width={500} height={400}/>
            </Grid>
        </Grid>
    )
}