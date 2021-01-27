import React from 'react'
import AboutCenter from './AboutCenter'
import AboutFoot from './AboutFoot'
import AboutHead from './AboutHead'
import AboutStripe from './AboutStripe'
import Box from './Box'
import styles from './Component.module.css'
import Envelope from './Envelope'

function About() {
    return (
        <div className={styles.About}>
            <h1>About</h1>
            <Box></Box>
            <AboutHead></AboutHead>
            <AboutStripe></AboutStripe>
            <AboutCenter></AboutCenter>
            <AboutStripe></AboutStripe>
            <AboutFoot></AboutFoot>
            <Envelope></Envelope>
        </div>
    )
}

export default About
