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
                        hayan comprado y han contado su experiencia.{' '}
                    </p>
                    <div>
                        <div className='card-group'>
                            <div className='card'>
                                <img
                                    src='./assets/img/ratongaming.jpg'
                                    className='card-img-top'
                                    alt='...'
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>Card title</h5>
                                    <p className='card-text'>
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <p className='card-text'>
                                        <small className='text-muted'>
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className='card'>
                                <img
                                    src='./assets/img/ratongaming.jpg'
                                    className='card-img-top'
                                    alt='...'
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>Card title</h5>
                                    <p className='card-text'>
                                        This card has supporting text below as a
                                        natural lead-in to additional content.
                                    </p>
                                    <p className='card-text'>
                                        <small className='text-muted'>
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className='card'>
                                <img
                                    src='./assets/img/ratongaming.jpg'
                                    className='card-img-top'
                                    alt='...'
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>Card title</h5>
                                    <p className='card-text'>
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This card has even
                                        longer content than the first to show
                                        that equal height action.
                                    </p>
                                    <p className='card-text'>
                                        <small className='text-muted'>
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
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
