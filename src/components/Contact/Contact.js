import React from 'react'
import {Facebook, GitHub, LinkedIn} from '@material-ui/icons'
import './style.css'
export default function Contact(){
    return (
        <div className='container'>
            <a href='https://www.linkedin.com/in/juliana-loureiro-622702132/' target='_blank'><LinkedIn fontSize='large' className='icon' /></a>
            <a href='https://github.com/JullyLoureiro' target='_blank'><GitHub fontSize='large' className='icon'/></a>
            <a href='https://facebook.com/jullyloureiro' target='_blank'><Facebook fontSize='large' className='icon'/></a>
        </div>
    )
}