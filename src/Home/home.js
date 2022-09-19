import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import JsonBook from '../books.json'
import Banner2 from '../Img/banner2.png'
export default function Func() {
    const [list, setlist] = useState([])
    function listBook() {
        setlist(JsonBook);
    }
    useEffect(() => { listBook() }, [])
    return (
        <>
            <div className='main-all'>
                <Navbar />
                <div className='main-home'>
                    <div className='banner'>
                        <a>Livraria Online</a>
                        <h1>Leia de gráça seus livros aqui</h1>
                        <p>toda a biblioteca está no seu celular</p>
                        <button onClick={()=> {window.location.href = "/list_books"}}>Ler Mais</button>
                    </div>
                    <div className='content'>
                        <div className='list-books'>
                            <div style={{ display: "flex" }}>
                                <button onClick={() => { window.location.href = "/list_books_aventuras" }} className='title'>Livros de Aventuras </button>
                                <i className='bx bx-chevron-right' ></i>
                            </div>
                            <div className='list'>
                                {list.filter(x => x.category_Id === "aventuras").slice(0, 4).map((item) =>
                                    <>
                                        <div className='book'>
                                            <div className='img'>
                                                <img src={item.capa} />
                                            </div>
                                            <div className='star'>
                                                <i className='bx bxs-star' ></i>
                                                <p style={{ color: "gray" }}>{item.avaliation} By {item.created_By}</p>
                                            </div>
                                            <button onClick={() => { localStorage.setItem("bookId", item.id); localStorage.setItem("mainColor", item.main_Color); window.location.href = "/details" }}>Começe a ler</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className='list-books'>
                            <div style={{ display: "flex" }}>
                            <button onClick={() => { window.location.href = "/list_books_romances" }} className='title'>Livros de Romances</button>
                                <i onClick={() => { window.location.href = "/list_books_romances" }} className='bx bx-chevron-right' ></i>
                            </div>
                            <div className='list'>
                                {list.filter(x => x.category_Id === "romances").slice(0, 4).map((item) =>
                                    <>
                                        <div className='book'>
                                            <div className='img'>
                                                <img src={item.capa} />
                                            </div>
                                            <div className='star'>
                                                <i className='bx bxs-star' ></i>
                                                <p style={{ color: "gray" }}>{item.avaliation} By {item.created_By}</p>
                                            </div>
                                            <button onClick={() => { localStorage.setItem("bookId", item.id); localStorage.setItem("mainColor", item.main_Color); window.location.href = "/details" }}>Começe a ler</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className='footer' style={{ marginBottom: "125px" }}>
                            <p>Leia varios livros de forma gratuita aqui na Pedro's Books</p>
                            <img src={Banner2} />
                        </div>
                        <div className='list-books'>
                            <div style={{ display: "flex" }}>
                                <p className='title'>Algumas das ultimas Chegadas</p>
                                <i onClick={() => { window.location.href = "/list_books_ultimas_chegadas" }} className='bx bx-chevron-right' ></i>
                            </div>
                            <div className='list'>
                                {list.sort((a, b) => (a.id > b.id) ? -1 : 1).slice(0, 8).map((item) =>
                                    <>
                                        <div className='book'>
                                            <div className='img'>
                                                <img src={item.capa} />
                                            </div>
                                            <div className='star'>
                                                <i className='bx bxs-star' ></i>
                                                <p style={{ color: "gray" }}>{item.avaliation} By {item.created_By}</p>
                                            </div>
                                            <button onClick={() => { localStorage.setItem("bookId", item.id); localStorage.setItem("mainColor", item.main_Color); window.location.href = "/details" }}>Começe a ler</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className='footer'></div>
                    </div>
                </div>
            </div>
        </>
    );
}