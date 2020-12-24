import { useRouter } from 'next/router';

export const Modelo = () => {
    const router = useRouter();
    const { marca, serie, modelo } = router.query;

    return (
        <>
            <div className='col-xl-10 m-auto'>
                <h1 className='text-center'>
                    Logitech G502 Hero RGB 16000-DPI
                </h1>
                <hr />
                <div className='row'>
                    <div className='col-md-3'>
                        <img
                            className='img-fluid'
                            src='/assets/img/ratongaming.jpg'
                        />
                    </div>
                    <div className='col-md-5 mt-4'>
                        <h4>Características</h4>
                        <ul>
                            <li>
                                <p>
                                    Sensor Hero 16K: La generación de sensor
                                    óptico HERO para ratón ofrece precisión
                                    hasta 16 000 dpi sin suavizado, filtrado ni
                                    aceleración
                                </p>
                            </li>
                            <li>
                                <p>
                                    11 Botones Programables y Botón Rueda rápido
                                    con Dos Modos: El ratón con cable para
                                    gaming Logitech G permite personalizar tu
                                    configuración para controlar totalmente el
                                    juego
                                </p>
                            </li>
                            <li>
                                <p>
                                    Peso Personalizable: Ajusta el tacto y el
                                    deslizamiento del ratón; G502 HERO incluye
                                    cinco pesas de 3.6 g que se pueden usar en
                                    diversas configuraciones de peso
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sistema Mecánico de Tensión de Botones: El
                                    sistema mecánico de tensión de botones del
                                    ratón con cable para gaming aumenta la
                                    coherencia de respuesta de los botones
                                    izquierdo y derecho
                                </p>
                            </li>
                        </ul>
                        <div className='bg-darkmio'>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className='myspacing'>
                                        <span className='text-muted'>
                                            Precio máximo
                                            <br />
                                            <small>(RECOMENDADO)</small>
                                        </span>
                                    </div>
                                    <span className='numprecio'>
                                        <b>65</b>
                                    </span>
                                    <span className='smallnum'>.50€</span>
                                </div>
                                <div className='col-md-7'>
                                    <p className='text-muted'>
                                        <small>
                                            <img
                                                width='15px'
                                                src='/assets/svg/alert-circle.svg'
                                            />{' '}
                                            Esta es una recomendacion basada en
                                            la comparacion de precios actuales
                                            de diferentes tiendas, en base a las
                                            valoraciones de los clientes y a los
                                            detalles tecnicos y prestaciones del
                                            equipo.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-4'>
                        <table className='table table-striped table-hover'>
                            <h4>Detalles técnicos</h4>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Fabricante</b>
                                    </td>
                                    <td>Logitech</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Marca</b>
                                    </td>
                                    <td>Logitech G</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Serie</b>
                                    </td>
                                    <td>G502-Hero</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Sensor</b>
                                    </td>
                                    <td>16 000 DPI/PPP</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Botones</b>
                                    </td>
                                    <td>11</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Peso</b>
                                    </td>
                                    <td>127g</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Conexión</b>
                                    </td>
                                    <td>Cable (1.8m)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Lar/Anch/Alt</b>
                                    </td>
                                    <td>13.2/7.5/3.5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 pb-5'>
                        <h4>Comparador de precios</h4>
                        <hr />
                        <div className='row'>
                            <div className='col-lg-3 m-auto'>
                                <div>
                                    <h4>Amazon</h4>
                                    <span className='numprecio'>
                                        <b>52</b>
                                    </span>
                                    <span className='smallnum'>.99€</span>
                                </div>
                                <div className='btn btn-primary'>
                                    Ir a la tienda
                                </div>
                            </div>
                            <div className='col-lg-3 m-auto'>
                                <div>
                                    <h4>PCComponentes</h4>
                                    <span className='numprecio'>
                                        <b>53</b>
                                    </span>
                                    <span className='smallnum'>.99€</span>
                                </div>
                                <div className='btn btn-primary'>
                                    Ir a la tienda
                                </div>
                            </div>
                            <div className='col-lg-3 m-auto'>
                                <div>
                                    <h4>Media Markt</h4>
                                    <span className='numprecio'>
                                        <b>49</b>
                                    </span>
                                    <span className='smallnum'>.99€</span>
                                </div>
                                <div className='btn btn-primary'>
                                    Ir a la tienda
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-12'>
                                <h4>Puntos positivos</h4>
                                <ul>
                                    <li>
                                        <p>
                                            <b>Sensor Hero 16000 DPI</b>: La
                                            presicion es máxima. equipado con el
                                            Hero, este Logitech hace temblar el
                                            mercado con un sensor optico de 16
                                            mil PPP que es más que suficiente
                                            para satisfacer hasta a los Gamers
                                            más exigentes de la actualidad
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <b>11 Botones programables</b>: Con
                                            una hubicacion muy comoda, que se
                                            ajusta a practicamente cualquier
                                            mano, además de ser totalmente
                                            programables, los 11 botones de este
                                            ratón gaming son una de sus
                                            principales cualidades y una de las
                                            que le hace destacar sobre la
                                            competencia
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <b>Relación Calidad-Precio</b>: Sin
                                            duda su aspecto positivo más
                                            llamativo. Con un precio que suele
                                            rondar los 50 o 60 euros este G502
                                            es la mejor opcion del mercado por
                                            ese rango de precio. No es
                                            casualidad que esté ubicado en los
                                            ratones gaming más vendidos en las
                                            principales tiendas online.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <b>Recomendado</b>: Este dispositivo
                                            ha sido uno de los mas recomendados
                                            durante todo el año 2020 y
                                            seguramente seguirá dando de que
                                            hablar en el 2021. Son varios los
                                            sitios webs especialisados en el
                                            tema que lo recomiendan como la
                                            mejor opcion de la actualidad
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-12'>
                                <h4>Puntos negativos</h4>
                                <ul>
                                    <li>
                                        <p>
                                            <b>Nada que resaltar</b>: Apesar de
                                            haber encontrado algunas reseñas
                                            negativas, no hay nada que realmente
                                            preocupe o se deba tomar en cuenta,
                                            porque la gran cantidad de estos
                                            dispositivos que se han vendido
                                            siempre da lugar a que alguno pueda
                                            fallar, pero de forma muy
                                            exporadica.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='video-responsive'>
                            <iframe
                                src='https://www.youtube.com/embed/q_6tPGfFg5s'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <span>
                        Crédito del video{' '}
                        <a
                            target='_blank'
                            href='https://www.youtube.com/channel/UCY577sQz6dgfcZOY19oIL6A'
                        >
                            UNBOXME
                        </a>
                    </span>
                </div>
                <style jsx>
                    {`
                        .video-responsive {
                            height: 0;
                            overflow: hidden;
                            padding-bottom: 56.25%;
                            padding-top: 30px;
                            position: relative;
                        }
                        .video-responsive iframe,
                        .video-responsive object,
                        .video-responsive embed {
                            height: 100%;
                            left: 0;
                            position: absolute;
                            top: 0;
                            width: 100%;
                        }
                        .mispan {
                            font-size: 1.5em;
                        }
                        .myspacing {
                            line-height: 1em;
                        }
                        .bg-darkmio {
                            line-height: 3em;
                            background-color: #f1f5f9;
                            padding: 10px;
                        }
                        .smallnum {
                            font-size: 1.5em;
                        }
                        .numprecio {
                            font-size: 4em;
                        }
                        @media (max-width: 600px) {
                        }

                        p {
                            font-size: 0.9em;
                        }
                    `}
                </style>
            </div>
        </>
    );
};

export default Modelo;
