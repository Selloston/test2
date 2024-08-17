"use client";

import React, { useState, useRef } from 'react';
import styles from "./page.module.css";

function App()
{ 
    return(
        <>
        <svg className={styles.svg}>
            <filter id="fil">
                <feTurbulence baseFrequency="0.5">
                    
                </feTurbulence>
            </filter>
            <rect width="100%" height="100%" filter="url(#fil)"></rect>
        </svg>
        <header className={styles.header}>
            <div id={styles.bar}>
                <button className={styles.buttonbar}>Home</button>
                <button className={styles.buttonbar1}>Servises</button>
                <button className={styles.buttonbar1}>Our Projects</button>
                <button className={styles.buttonbar1}>About US</button>
                <button className={styles.buttonbarhelp}>HELP</button>
            </div>
        </header>
        <div className={styles.background}>
            <div  className={styles.rectangle1}>

            </div>
            <div className={styles.rectangle2}>
    
            </div>
            <div className={styles.rectangle3}>
    
            </div>
        </div>
        </>
    );
}

export default App;