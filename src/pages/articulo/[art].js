import React from 'react';

export default function Articulo() {
    return (
        <div className='shadow-sm page bgblue'>
            <div className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-md-12 ml-md-4 mt-3'>
                    <h1>Top 10 mejores ratones gaming del 2020 </h1>
                    <span className='lead'>
                        Esta es una recopilacion de informacion y de
                        valoraciones de las diferentes tiendas{' '}
                    </span>
                    <div className='mt-3'>
                        <img src='/assets/img/Raton-Gaming-muestra.jpg'></img>
                        <span>
                            <span className='text-muted'>
                                Photo by{' '}
                                <a href='https://unsplash.com/@andreas_haslinger?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
                                    Andreas Haslinger
                                </a>{' '}
                                on{' '}
                                <a href='https://unsplash.com/s/photos/mouse?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
                                    Unsplash
                                </a>
                            </span>
                        </span>
                    </div>
                    <h2>Factores que hemos valorado</h2>
                    <p>
                        Para poder seleccionar un buen raton gaming hay que
                        tener en cuenta muchos factores, pero en esta ocacion
                        nos hemos apoyado en 5, que son los que consideramos mas
                        importantes a la hora de selecionar el mejor para jugar.
                    </p>
                    <h3>DPI</h3>
                    <p>
                        Indudablemente cuanto mayor sea el numero de DPI, mayor
                        es la presicion que puedes tener en tus juegos. Por esta
                        razón este es uno de los aspectos que he considerado
                        como primordial
                    </p>
                    <h3>Botones</h3>
                    <p>
                        El numero de botones es especialmente importante en
                        juegos MMO, no tanto en FPS, aun así lo hemos tenido en
                        cuenta para este TOP 10 porque si bien es cierto que no
                        son impresindibles, tampoco están de más
                    </p>
                </div>
            </div>
            <style jsx>
                {`
                    img {
                        max-width: 100%;
                    }
                    @media (max-width: 600px) {
                    }

                    .cajatexto p {
                        text-align: justify;
                    }
                `}
            </style>
        </div>
    );
}
