import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import JsonBook from '../books.json'
export default function Func() {
    const [list, setlist] = useState([])
    const url = window.location.pathname;
    const [page, setpage] = useState()
    
    function DefinePage(props) {
        if (props === "ultimas") {
            return (<>
                <div>
                    <i onClick={() => window.history.back()} id='list-comeback' className='bx bx-left-arrow-alt'></i>
                    <div className='content'>
                        <div className='list-books'>
                            <div style={{ display: "flex" }}>
                                <p className='title'>Ultimas Chegadas</p>
                            </div>
                            <div className='list'>
                                {list.map((item) =>
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
                    </div>
                </div>
            </>)
        }
        if (props === "filter") {
            return (<>
                <div>
                    <i onClick={() => window.history.back()} id='list-comeback' className='bx bx-left-arrow-alt'></i>
                    <div className='content'>
                        <div className='list-books'>
                            <div style={{ display: "flex" }}>
                                <p className='title'>Livros de {url.split("_")[2]}</p>
                            </div>
                            <div className='list'>
                                {list.map((item) =>
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
                    </div>
                </div>
            </>)
        }
        if (props === "nada") {
            return (<>
                <div>
                    <div className='content'>
                        <div className='list-books'>
                            <div style={{ display: "flex" }}>
                                <p className='title'>Livros de Aventuras</p>
                                <i onClick={() => { window.location.href = '/list_books_aventuras' }} className='bx bx-chevron-right' ></i>
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
                    </div>
                </div>

                <div>

                    <div className='content'>
                        <div className='list-books'>
                            <div style={{ display: "flex" }}>
                                <p className='title'>Livros de Romances</p>
                                <i onClick={() => { window.location.href = '/list_books_romances' }} className='bx bx-chevron-right' ></i>
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
                    </div>
                </div>

                <div>

                    <div className='content'>
                        <div className='list-books'>
                            <div style={{ display: "flex" }}>
                                <p className='title'>Livros de Suspences</p>
                                <i onClick={() => { window.location.href = '/list_books_suspences' }} className='bx bx-chevron-right'></i>
                            </div>
                            <div className='list'>
                                {list.filter(x => x.category_Id === "suspences").slice(0, 4).map((item) =>
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
                    </div>
                </div>
            </>)
        }
    }
    function Start() {
        if (url.includes("chegadas")) {
            setlist(JsonBook.sort((a, b) => (a.id > b.id) ? -1 : 1));
            setpage(DefinePage("ultimas"))
        }
        if (url.split("_").length === 3) {
            setlist(JsonBook.filter(x => x.category_Id === url.split("_")[2]))
            setpage(DefinePage("filter"))
        }
        else {
            setlist(JsonBook);
            setpage(DefinePage("nada"))
        }
        console.log(list)
    }
    useEffect(() => { Start() }, [list])
    return (
        <>
            <div className='main-all'>
                <Navbar />
                <div className='main-list-books'>
                    {page}
                    <div className='footer'></div>
                </div>
            </div>
        </>
    );
}