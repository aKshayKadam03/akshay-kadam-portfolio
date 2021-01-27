import React from 'react'
import styles from './Component.module.css'

function Navigation() {
    return (
        <div className={styles.Navigation}>
            <div>
                <a href="#home">Home</a>
            </div>
            <div>
                <a href="#about">About</a>
            </div>
            <div>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navigation
