import React from 'react'
import PhotoMe from '../../assets/photo-me2.jpg'
import './style.css'
import { slideInUp } from 'react-animations'
import Radium, {StyleRoot} from 'radium'
import {pink} from '../../baseColors/colors'
import {Grid} from '@material-ui/core'

const styles = {
    bounce: {
      animation: 'x 2.5s',
      animationName: Radium.keyframes(slideInUp, 'slideInUp')
    }
  }

export default function Apresentation(){
    return (
        <StyleRoot  className='containerApresentation' /*style={styles.bounce}*/>
            <Grid container className='gridApresentation'>
                <Grid item xs={12} md={4} className='gridProfile'>
                    <img className='profile' src={PhotoMe}/>
                </Grid>
                <Grid item xs={12} md={8}  className='gridInfoApresentation'>
                    <span className='apresentation'>Olá, me chamo <span style={{color: pink}}>Juliana Loureiro</span>! Sou Desenvolvedora Front-End e amante do desenvolvimento mobile.</span>
                </Grid>
            </Grid>
        </StyleRoot>
    )
}