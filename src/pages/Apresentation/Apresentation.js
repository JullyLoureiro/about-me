import React from 'react'
import PhotoMe from '../../assets/photo-me.JPG'
import './style.css'

export default function Apresentation(){
    return (
        <div className='containerApresentation'>
            <img style={{borderRadius: 300}} src={PhotoMe} width={400} height={400}/>
            <span className='apresentation'>Olá, me chamo Juliana Loureiro e sou Desenvolvedora Front-End e amante do desenvolvimento mobile.</span>
        </div>
    )
}