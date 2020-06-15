import React from 'react'
import './style.css'
import {Grid} from '@material-ui/core'
import { Progress } from 'semantic-ui-react'

export default function Skills(){
    return (
        <Grid container className='containerSkills'>
            <Grid item xs={12} md={12}>
                <div>
                    <p>tetse</p>
                    <Progress percent={29} color='pink' />
                </div>
            </Grid>
        </Grid>
    )
}