import React from 'react'
import styles from './Component.module.css'
import envelope from './Images/envelope.svg' 
import bottom from './Images/bottom.svg' 


function Envelope() {
    return (
        <div className={styles.Envelope}>
            <div>
                <img src={bottom} alt="bottom"></img>
                <img src={envelope} alt="envelope"></img>
            </div>
        </div>
    )
}

export default Envelope
