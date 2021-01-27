import React from 'react'
import styles from './Component.module.css'
import ui from './Images/ui.jpg' 

function Box() {
    return (
        <div className={styles.Box}>
            <div>
                <img src={ui} alt="ui"></img>
            </div>
        </div>
    )
}

export default Box
