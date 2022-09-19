import React from 'react'
import { useEffect, useState } from 'react'
export default function Func() {
    function setcolors() {
        var cap = document.getElementById("cap")
        cap.style.color = `${localStorage.getItem("mainColor")}`

        var footer = document.getElementById("footer")
        footer.style.backgroundColor = `${localStorage.getItem("mainColor")}`

    }
    useEffect(() => { setcolors() }, [])
    return (
        <>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
            <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@800;900&display=swap" rel="stylesheet" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />

            <div className='main-read-book'>
                <i onClick={() => window.history.back()} className='bx bx-left-arrow-alt' ></i>
                <h3 className='cap' id='cap'>Capitulo 1</h3>
                <h1>{localStorage.getItem("bookName")}</h1>
                <div className='completed-text'>
                    <div dangerouslySetInnerHTML={{ __html: localStorage.getItem("bookContent") }} id='inputText'></div>
                </div>
                <div className='footer' id='footer'></div>
            </div>
        </>
    );
}