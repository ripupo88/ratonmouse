export default function Modelo({ dat }) {
    const data = dat;
    console.log('datas', data);
    return (
        <div>
            <div className='col-xl-10 m-auto mt-3'>
                <h1 className='text-center'>{data?.title}</h1>
                <hr />
                <div className='row'>
                    <div className='col-md-3 text-center'>
                        <img className='img-fluid' src={data?.imgurl} />
                    </div>
                    <div className='col-md-5 mt-4'>
                        <h4>Características</h4>
                        <ul>
                            {data?.caracteristicas.map((item) => {
                                return (
                                    <li>
                                        <p>
                                            <small>{item}</small>
                                        </p>
                                    </li>
                                );
                            })}
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
                                        <b>
                                            {
                                                data?.preciorecomendado.split(
                                                    '.'
                                                )[0]
                                            }
                                        </b>
                                    </span>
                                    <span className='smallnum'>
                                        .{data?.preciorecomendado.split('.')[1]}
                                        €
                                    </span>
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
                                    <td>{data?.detalles.fabricante}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Marca</b>
                                    </td>
                                    <td>{data?.detalles.marca}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Serie</b>
                                    </td>
                                    <td>{data?.detalles.serie}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Sensor</b>
                                    </td>
                                    <td>{data?.detalles.sensor}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Botones</b>
                                    </td>
                                    <td>{data?.detalles.botones}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Peso</b>
                                    </td>
                                    <td>{data?.detalles.peso}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Conexión</b>
                                    </td>
                                    <td>{data?.detalles.conexion}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Lar/Anch/Alt</b>
                                    </td>
                                    <td>{data?.detalles.dimenciones}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 pb-5'>
                        <h4>Comparador de precios</h4>
                        <hr />
                        <div className='row myspacing2'>
                            {data?.comparador.map((item) => {
                                return (
                                    <div className='col-sm-3 col-6 m-auto'>
                                        <div>
                                            <h4>{item.nombre}</h4>
                                            <span className='numprecio'>
                                                <b>
                                                    {item.precio.split('.')[0]}
                                                </b>
                                            </span>
                                            <span className='smallnum'>
                                                .{item.precio.split('.')[1]}€
                                            </span>
                                        </div>
                                        <a
                                            href={item.afiliado}
                                            className='btn btn-primary'
                                        >
                                            Ir a la tienda
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-6'>
                                <h4>Puntos positivos</h4>
                                <ul>
                                    {data?.positivos.map((item) => {
                                        return (
                                            <li>
                                                <p>
                                                    <b>{item.split(':')[0]}</b>:
                                                    {item.split(':')[1]}
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <h4>Puntos negativos</h4>
                                <ul>
                                    {data?.negativos.map((item) => {
                                        return (
                                            <li>
                                                <p>
                                                    <b>{item.split(':')[0]}</b>:
                                                    {item.split(':')[1]}
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='video-responsive'>
                            <iframe
                                src={data?.youtube.url}
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <span>
                        Este vídeo pertenece a:{' '}
                        <a target='_blank' href={data?.youtube.credit}>
                            {data?.youtube.nombre}
                        </a>
                    </span>
                </div>
                <style jsx>
                    {`
                         {
                            /* .alto {
                            max-height: 360px;
                        } */
                        }
                        .myspacing2 div {
                            text-align: center;
                        }
                        .myspacing2 span {
                            color: #616569;
                        }
                        .myspacing2 {
                            line-height: 2.4em;
                        }
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
                            background-color: #f1f5f9;
                            padding: 10px;
                            font-size: 0.85rem;
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
        </div>
    );
}

export async function getStaticPaths() {
    let paths = [];
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const res = await fetch(`http://localhost:3030/raton`, requestOptions);
    const datamia = await res.json();

    datamia.data?.map((item, key) => {
        const marca = item.detalles.marca.replace(/[\. ,:-]+/g, '-');
        const serie = item.detalles.serie.replace(/[\. ,:-]+/g, '-');
        const modelo = item.detalles.modelo.replace(/[\. ,:-]+/g, '-');
        paths.push({
            params: {
                marca,
                serie,
                modelo,
            },
        });
    });

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const res = await fetch(
        `http://localhost:3030/raton?detalles.modelo=${params.modelo}`,
        requestOptions
    );
    const data = await res.json();
    const dat = data.data[0];

    await sleep(5);
    return {
        props: { dat },
        revalidate: 10,
    };
}

async function sleep(seconds, logTimer = true) {
    let ms = seconds * 1000;
    if (logTimer) {
        console.log('Sleeping ' + seconds + ' seconds');
    }
    return new Promise((resolve) => setTimeout(resolve, ms));
}
