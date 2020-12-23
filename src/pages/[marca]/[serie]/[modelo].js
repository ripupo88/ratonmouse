import { useRouter } from 'next/router';

export const Modelo = () => {
    const router = useRouter();
    const { marca, serie, modelo } = router.query;

    return (
        <>
            <div className='col-md-10 m-auto'>
                <h1 className='text-center'>G502-Hero</h1>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src='/assets/img/ratongaming.jpg' />
                    </div>
                    <div className='col-md-7 mt-4'>
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
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <h3>Valoraciones de los Clientes</h3>
                        <hr />
                        <div className='col-md-3'>
                            <h4>Amazon</h4>
                            <p>4.5/5</p>
                        </div>
                        <div className='col-md-3'>
                            <h4>PcComponentes</h4>
                            <p>9.2/10</p>
                        </div>
                        <div className='col-md-3'>
                            <h4>MediaMarckt</h4>
                            <p>4.4/5</p>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                </div>
                <style jsx>
                    {`
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
