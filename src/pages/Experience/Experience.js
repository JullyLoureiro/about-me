import React from 'react'
import './style.css'
import {Grid} from '@material-ui/core'

export default function Experience(props){
    

    return (
        <Grid container className='containerExperience'>
             <Grid item xs={12} md={12}>
                {props.children}  
             </Grid>
        </Grid>
    )
}