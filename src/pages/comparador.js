import React from 'react';

export default function Productos({ data0, data1 }) {
    return (
        <div className='shadow-sm page bgblue'>
            {/* <h1 className='text-center'>Comparador</h1>
            <div className='row m-0 p-0 pb-5'>
                <div className='d-none d-sm-none d-md-flex col-md-3 flex-right'>
                    <img
                        className='img'
                        width='940'
                        height='1520'
                        src={data0.imgurl}
                    />
                </div>
                <div className='col-md-6 m-auto'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>{data0.detalles.fabricante}</td>
                                <td>
                                    <b>Fabricante</b>
                                </td>
                                <td>{data1.detalles.fabricante}</td>
                            </tr>
                            <tr>
                                <td>{data0.detalles.marca}</td>
                                <td>
                                    <b>Marca</b>
                                </td>
                                <td>{data1.detalles.marca}</td>
                            </tr>
                            <tr>
                                <td>{data0.detalles.serie}</td>
                                <td>
                                    <b>Serie</b>
                                </td>
                                <td>{data1.detalles.serie}</td>
                            </tr>
                            <tr>
                                <td>{data0.detalles.sensor}</td>
                                <td>
                                    <b>Sensor</b>
                                </td>
                                <td>{data1.detalles.sensor}</td>
                            </tr>
                            <tr>
                                <td>{data0.detalles.botones}</td>
                                <td>
                                    <b>Botones</b>
                                </td>
                                <td>{data1.detalles.botones}</td>
                            </tr>
                            <tr>
                                <td>{data0.detalles.peso}</td>
                                <td>
                                    <b>Peso</b>
                                </td>
                                <td>{data1.detalles.peso}</td>
                            </tr>
                            <tr>
                                <td>{data0.detalles.conexion}</td>
                                <td>
                                    <b>Conexión</b>
                                </td>
                                <td>{data1.detalles.conexion}</td>
                            </tr>
                            <tr>
                                <td>{data0.detalles.dimenciones}</td>
                                <td>
                                    <b>Lar/Anch/Alt</b>
                                </td>
                                <td>{data1.detalles.dimenciones}</td>
                            </tr>
                            <tr>
                                <td>{data0.comparador[0].precio}</td>
                                <td>
                                    <b>Precio</b>
                                </td>
                                <td>{data1.comparador[0].precio}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='d-none d-sm-none d-md-flex col-md-3 flex-left'>
                    <img
                        className='img'
                        width='940'
                        height='1520'
                        src={data1.imgurl}
                    />
                </div>
            </div>
            <style jsx>
                {`
                    .img {
                        width: auto;
                        max-height: 400px;
                    }
                    .flex-right {
                        display: flex;
                        justify-content: flex-end;
                    }
                    .flex-left {
                        display: flex;
                    }
                    td {
                        text-align: center;
                    }
                    @media (max-width: 600px) {
                    }
                `}
            </style> */}
        </div>
    );
}

// export async function getStaticProps() {
//     const requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//     };
//     let data = await fetch(`http://localhost:3030/raton`, requestOptions)
//         .then((response) => response.text())
//         .then((result) => JSON.parse(result))
//         .catch((error) => console.log(error));

//     const data0 = data.data[0];
//     const data1 = data.data[1];

//     return {
//         props: { data0, data1 },
//         revalidate: 10,
//     };
// }
