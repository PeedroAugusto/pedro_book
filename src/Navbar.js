import React from 'react'
import { useEffect, useState } from 'react'
import './style.css'
import Logo from './Img/logo.png'
import Logo2 from './Img/logopreto.png'
import 'boxicons'

export default function Func() {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
            <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@800;900&display=swap" rel="stylesheet" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <div className='main-navbar'>
                <div className='navbar'>
                    <div className='logo'>
                        <a href='/'><img className='branco' src={Logo} /></a>
                        <a href='/'><img className='preto' src={Logo2} /></a>
                    </div>
                    <div className='links'>
                        <ul>
                            <li><a href='/'><i className='bx bx-home-alt-2'></i></a></li>
                            <li><a href='/list_books'><i className='bx bx-book' ></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}