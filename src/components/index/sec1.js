import React from 'react';

export const Sec1 = () => {
    return (
        <div className='shadow-sm page bgblue'>
            <div className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-md-12 ml-md-4'>
                    <img
                        width='650'
                        alt='2 Ratones ordenador uno inalambrico y otro con cable'
                        className='w-100'
                        src='./assets/img/ratonordenador.jpg'
                    />
                    <h1 className='text-center'>Raton de ordenador</h1>
                    <p>
                        En esta web tenemos una misión, recomendarte siempre la
                        mejor opción que tienes en el mercado para adquirir un
                        ratón que de ajuste a tus necesidades, que cumpla los
                        requerimientos que exiges, que sea de buena calidad y al
                        mejor precio posible. Esto lo conseguimos, visitando
                        cada blog, cada página de venta, cada sitio web en
                        internet en el que se hable, se valore o se haga una
                        review de algún ratón. Recopilamos toda la información
                        posible, testeamos los que más nos llamen la atención y
                        leemos las valoraciones de miles de clientes que ya lo
                        hayan comprado y cuente su experiencia.{' '}
                    </p>
                    <div>
                        <div className='card' style={{ width: '18rem' }}>
                            <div className='card-body'>
                                <h5 className='card-title'>Gaming</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>
                                    Para jugadores
                                </h6>
                                <p className='card-text'>
                                    Maximas prestaciones para sacar el mejor
                                    rendiomiento en los juego
                                </p>
                                <a href='#' className='card-link'>
                                    Guia
                                </a>
                                <a href='#' className='card-link'>
                                    Recomendaciones
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    @media (max-width: 600px) {
                    }

                    .cajatexto p {
                        text-align: justify;
                    }
                `}
            </style>
        </div>
    );
};
