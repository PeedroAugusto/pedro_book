import React from 'react'
import { useEffect, useState } from 'react'
import JsonBook from '../books.json'

export default function Func() {
    const [book, setbook] = useState([])
    function getbook() {

        setbook(JsonBook.filter(x => x.id === Number(localStorage.getItem("bookId")))[0])
        var header = document.getElementById("headeer")
        console.log(book.main_Color)
        header.style.backgroundColor = `${localStorage.getItem("mainColor")}`

    }
    const txt = `${book.text_Content}`
    const toShow = txt.substring(0, 200) + "..."
    useEffect(() => { getbook() }, [])
    return (
        <>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
            <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@800;900&display=swap" rel="stylesheet" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />

            <div className='main-details'>
                <div className='header' id='headeer'>
                    <i onClick={() => window.history.back()} className='bx bx-left-arrow-alt'></i>
                </div>
                <img src={book.capa} />
                <div className='content'>
                    <div className='stars'>
                        <i className='bx bxs-star'></i>
                        <p style={{ color: "#f7b603" }}>{book.avaliation}</p>
                        <p style={{ marginLeft: "10px" }}>543 Avaliações</p>
                    </div>
                    <h1 className='book-name'>{book.name}</h1>
                    <p style={{ color: "gray" }}>By {book.created_By}</p>
                    <p dangerouslySetInnerHTML={{ __html: toShow }} className='text'></p>
                    <button onClick={() => { localStorage.setItem("bookName", book.name); localStorage.setItem("bookContent", book.text_Content); window.location.href = "/read-book" }}>Começar a ler</button>
                </div>
            </div>
        </>
    );
}