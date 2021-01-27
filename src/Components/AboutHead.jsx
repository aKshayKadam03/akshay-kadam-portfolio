import React from 'react'
import styles from './Component.module.css'

function AboutHead() {
    return (
        <div className={styles.AboutHead}>
            <div>
                <h1>Left</h1>
            </div>
            <div>
                <h1>Right</h1>
            </div>
        </div>
    )
}

export default AboutHead
