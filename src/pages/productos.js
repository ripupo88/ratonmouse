import React from 'react';

export default function Productos({ data }) {
    console.log(data);
    return (
        <div className='shadow-sm page bgblue'>
            <h1 className='text-center'>Catálogo</h1>
            <div className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-xl-8 m-auto ml-md-4'>
                    {data.data.map((item) => {
                        return (
                            <div className='row mb-3'>
                                <hr />
                                <div className='col-1'>
                                    <div>
                                        <img
                                            className='img-fluid'
                                            src={item.imgurl}
                                        />
                                    </div>
                                </div>
                                <div className='col-9'>
                                    <h4>{item.title}</h4>
                                    <p>{item.caracteristicas[0]}</p>
                                </div>
                                <div className='col-2 btnc-flex'>
                                    <a
                                        className='btn btn-dark'
                                        href={`/${
                                            item.detalles.marca
                                        }/${item.detalles.serie.replace(
                                            /[\. ,:-]+/g,
                                            '-'
                                        )}/${item.detalles.modelo}`}
                                    >
                                        Ver más
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                    <hr />
                </div>
            </div>
            <style jsx>
                {`
                    .btnc-flex {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    @media (max-width: 600px) {
                    }
                `}
            </style>
        </div>
    );
}

export async function getStaticProps() {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const data = await fetch(`http://localhost:3030/raton`, requestOptions)
        .then((response) => response.text())
        .then((result) => JSON.parse(result))
        .catch((error) => console.log(error));

    return {
        props: { data },
        revalidate: 10,
    };
}
