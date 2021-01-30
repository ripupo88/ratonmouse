import React from 'react';

export default function Articulo({ dat }) {
    if (!dat) return null;

    return (
        <div className='shadow-sm page bgblue'>
            <div className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-md-10 ml-md-4 mt-3'>
                    <h1 className='text-center'>Artículos</h1>
                    <div className='mt-5 row'>
                        {dat.map((item) => {
                            return (
                                <div key={item.id} className='col-md-6'>
                                    <div className='card  '>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                {item.content.h1}
                                            </h5>
                                            <p className='card-text'>
                                                {item.content.lead}
                                            </p>
                                            <a
                                                href='#'
                                                className='btn btn-primary'
                                            >
                                                Leer más...
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <style jsx>{``}</style>
        </div>
    );
}

export async function getStaticProps(context) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const res = await fetch(
        `http://161.97.156.161:3030/article`,
        requestOptions
    );
    const data = await res.json();

    const dat = data.data;

    if (!dat) return { notFound: true };
    else return { props: { dat } };
}
