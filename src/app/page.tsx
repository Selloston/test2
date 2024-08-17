"use client";

import React, { useState, useRef } from 'react';
import styles from "./page.module.css";

function App()
{ 
    let  [positon, setpositon] = useState({ x: 0, y: 0});

    let cursor = useRef(null)

    let dis = {
        cursor: "block"
    }

    let w = 40;

    let movemose = (e) =>
    {
        setpositon({ x: e.clientX, y: e.clientY });
    }

    document.addEventListener("mousemove", movemose);
    document.addEventListener("mouseenter", function(e)
    {
        cursor.current.style.display = "block"
    });

    document.addEventListener("mouseleave", function(e)
    {
        cursor.current.style.display = "none"
    });


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
        <div ref={cursor} style={{'transform' :`translate(${positon.x - w}px, ${positon.y - w}px)`}} className={styles.cursor}>

        </div>
        <div className={styles.cursorhover}>

        </div>
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