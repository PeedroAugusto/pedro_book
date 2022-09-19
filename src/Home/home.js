import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar'
export default function Func() {

    const [list, setlist] = useState([])
    function listBook() {

        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://localhost:44311/PedroBook/ListBooks',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setlist(response.data);
                console.log(list)
            })
            .catch(function (error) {
            });
    }
    useEffect(() => { listBook() }, [])
    return (
        <>
            <div className='main-all'>
                <Navbar />
                <div className='main-home'>
                    <div className='banner'>
                        <a>Livraria Online</a>
                        <h1>Compre e leia seus livros aqui</h1>
                        <p>toda a biblioteca está no seu celular</p>
                        <button>Ler Mais</button>
                    </div>
                    <div className='content'>
                        <div className='list-books'>
                            <div style={{ display: "flex" }}>
                                <p className='title'>Livros de Romance</p>
                                <i className='bx bx-chevron-right' ></i>
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
                                            <button onClick={() => {localStorage.setItem("bookId", item.id); localStorage.setItem("mainColor", item.main_Color); window.location.href = "/details"}}>Começe a ler</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className='list-books'>
                            <div style={{ display: "flex" }}>
                                <p className='title'>Livros de Aventuras</p>
                                <i className='bx bx-chevron-right' ></i>
                            </div>
                            <div className='list'>
                                <div className='book'>
                                    <div className='img'>
                                        <img src='http://www.dfe.uem.br/comunicauem/wp-content/uploads/2017/05/IMG_6280-724x1024.jpg' />
                                    </div>
                                    <p style={{ textAlign: "center" }}>Carolina</p>
                                    <div className='star'>
                                        <i className='bx bxs-star' ></i>
                                        <p style={{ color: "gray" }}>4.5 By Carol Silva</p>
                                    </div>
                                    <button onClick={() => window.location.href = "/details"}>Começe a ler</button>
                                </div>
                                <div className='book'>
                                    <div className='img'>
                                        <img src='http://www.dfe.uem.br/comunicauem/wp-content/uploads/2017/05/IMG_6282-745x1024.jpg' />
                                    </div>
                                    <p style={{ textAlign: "center" }}>Carolina</p>
                                    <div className='star'>
                                        <i className='bx bxs-star' ></i>
                                        <p style={{ color: "gray" }}>4.5 By Carol Silva</p>
                                    </div>
                                    <button onClick={() => window.location.href = "/details"}>Começe a ler</button>
                                </div>
                                <div className='book'>
                                    <div className='img'>
                                        <img src='http://www.dfe.uem.br/comunicauem/wp-content/uploads/2017/05/IMG_6285-724x1024.jpg' />
                                    </div>
                                    <p style={{ textAlign: "center" }}>Carolina</p>
                                    <div className='star'>
                                        <i className='bx bxs-star' ></i>
                                        <p style={{ color: "gray" }}>4.5 By Carol Silva</p>
                                    </div>
                                    <button onClick={() => window.location.href = "/details"}>Começe a ler</button>
                                </div>
                                <div className='book'>
                                    <div className='img'>
                                        <img src='http://www.dfe.uem.br/comunicauem/wp-content/uploads/2017/05/IMG_6281-724x1024.jpg' />
                                    </div>
                                    <p style={{ textAlign: "center" }}>Carolina</p>
                                    <div className='star'>
                                        <i className='bx bxs-star' ></i>
                                        <p style={{ color: "gray" }}>4.5 By Carol Silva</p>
                                    </div>
                                    <button onClick={() => window.location.href = "/details"}>Começe a ler</button>
                                </div>
                            </div>
                        </div>
                        <div className='footer'></div>
                    </div>
                </div>
            </div>
        </>
    );
}