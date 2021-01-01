import React from 'react';

export default function Articulo() {
    return (
        <div className='shadow-sm page bgblue'>
            <div className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-md-12 ml-md-4 mt-3'>
                    <h1 className='text-center'>Cookies</h1>
                    <div className='mt-5'>
                        <div className='mt-5 pb-5'>
                            <span className='h3'>Información general</span>
                        </div>
                        <span className='h5'>
                            <b>¿Qué son las cookies?:</b>
                        </span>
                        <p>
                            Las cookies son pequeños archivos de texto
                            almacenados en el dispositivo final del navegador
                            (ordenador, smartphone, tableta, etc.) cuando visita
                            una página web. Si visita la página de IONOS o
                            utiliza otro servicio proporcionado por la misma, la
                            información se recopila y almacena utilizando
                            cookies. La ventaja de las cookies es que la
                            navegación se mejora ya que tus hábitos y
                            necesidades pueden ser reconocidos. Las cookies
                            ayudan a prestar servicios, a mantenerlos
                            actualizados y a mejorarlos continuamente.
                        </p>
                        <span className='h5'>
                            <b>
                                ¿Qué tipos de cookies utiliza esta página web?:
                            </b>
                        </span>
                    </div>
                    <div className='mt-3'>
                        <p>
                            <b>Cookies técnicas:</b> Son aquéllas que permiten
                            al usuario la navegación a través de una página web,
                            plataforma o aplicación y la utilización de las
                            diferentes opciones o servicios que en ella existan
                            como, por ejemplo, controlar el tráfico y la
                            comunicación de datos, identificar la sesión,
                            acceder a partes de acceso restringido, recordar los
                            elementos que integran un pedido, realizar el
                            proceso de compra de un pedido, realizar la
                            solicitud de inscripción o participación en un
                            evento, utilizar elementos de seguridad durante la
                            navegación, almacenar contenidos para la difusión de
                            videos o sonido o compartir contenidos a través de
                            redes sociales.
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    span {
                        margin-top: 15px;
                        margin-bottom: 20px;
                    }
                    p {
                        margin: 15px;
                        line-height: 1.8rem;
                    }
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
