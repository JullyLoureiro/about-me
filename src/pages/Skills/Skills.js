import React from 'react'
import './style.css'
import {Grid} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import ImgSkills from '../../assets/skills.png'

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#FF0090',
    },
  }))(LinearProgress);

export default function Skills(){
    const Progress = (props) => (
        <Grid className='progress' item xs={12} md={12}>
                <BorderLinearProgress variant="determinate" value={props.value} />
                <label>{props.title}</label>
        </Grid>
    )
    return (
        <Grid container direction={'row'}>
            <Grid item xs={12} md={5} className='info'>
                <Grid container direction={'column'} >
                    <div style={{padding: 130, marginTop: 30}}>
                        <span className='textInfo'>Este progress baseia-se em uma auto crítica da minha atual experiência e aprendizado nas tecnologias listadas. Para uma melhor avaliação consulte meus repositórios github e/ou sinta-se à vontade para aplicar testes condizentes.</span>
                        <br/>
                        <img className='imgSkills' src={ImgSkills}/>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12} md={7}>
                <Grid container className='containerSkills'>
                    <Progress title='React JS' value={75} />
                    <Progress title='HTML 5' value={65} />
                    <Progress title='CSS 3' value={60} />
                    <Progress title='Javascript' value={65} />
                    <Progress title='Java Android' value={85} />
                    <Progress title='Node JS' value={35} />
                    <Progress title='React Native' value={75} />
                    <Progress title='C#' value={40} /> 
                    <Progress title='Kotlin' value={30} />
                </Grid>
            </Grid>
        </Grid>
       
    )
}