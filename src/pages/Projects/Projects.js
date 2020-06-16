import React from 'react'
import './style.css'
import {Grid} from '@material-ui/core'
import Card from '../../components/Card/Card'

export default function Projects(){
    return (
        <Grid container className='containerProjects'>
            <Grid item xs={12} md={3}>
                <Card 
                    url={'https://mobvendas.com.br/'}
                    title='Mob Vendas' 
                    info='Um app desenvolvido em Java para android direcionado para autônomos, vendedores e microempreendedores gerenciarem suas vendas.' 
                    img='https://lh3.googleusercontent.com/hH_8nrq4j5DrtNM_H05Pm67piUxOSauETjUjZWGEK0WYtt-d-FrFiDT4kY5VmHxtAQ=h250-rw'
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card
                    url={'https://play.google.com/store/apps/details?id=com.wsge.gerencial'}
                    title='WSGE Gerencial'
                    info='Ferramenta para Android e IOS feito em React Native para gerenciar empresas que já utilizam o sistema WSGE da JD System.'
                    img='https://lh3.googleusercontent.com/m7BplRHYNEgFtND5b1Tf5K6wvAKO7Abp3wnDHlWqHpI1QzUksiDnJQ5JBPHcPK-3VDM=w2560-h1156-rw'
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card
                    url={'https://app-covid19.now.sh/'}
                    title='Dashboard Covid'
                    info='Dashboard que consome dados abertos sobre o Covid-19 através de gráficos, desenvolvido através do framework React JS.'
                    img='https://github.com/JullyLoureiro/dashboard-covid-19/raw/master/src/images/printAppCovid.PNG'
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card
                    url={'https://github.com/JullyLoureiro/projeto-final-ahp'}
                    title='Decision AHP'
                    info='Aplicação para Android desenvolvida em Java, para auxiliar gestores na tomada de decisão multicritério, utilizando a metodologia AHP.'
                    img='https://raw.githubusercontent.com/JullyLoureiro/projeto-final-ahp/master/app/src/main/res/drawable/logo.png'
                />
            </Grid>
                Desenvolvido por Juliana Loureiro
        </Grid>
    )
}