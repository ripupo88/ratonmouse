import React from 'react';

export default function Productos({ data }) {
    return (
        <div className='shadow-sm page bgblue'>
            <h1 className='text-center'>Comparador</h1>
            <div className='row m-0 p-0 pb-5'>
                <div className='col-xl-4 flex-right'>
                    <img src={data.imgurl} />
                </div>
                <div className='col-xl-4 m-auto'>
                    <table className='table table-striped table-hover'>
                        <tbody>
                            <tr>
                                <td>{data.detalles.fabricante}</td>
                                <td>
                                    <b>Fabricante</b>
                                </td>
                                <td>{data.detalles.fabricante}</td>
                            </tr>
                            <tr>
                                <td>{data.detalles.marca}</td>
                                <td>
                                    <b>Marca</b>
                                </td>
                                <td>{data.detalles.marca}</td>
                            </tr>
                            <tr>
                                <td>{data.detalles.serie}</td>
                                <td>
                                    <b>Serie</b>
                                </td>
                                <td>{data.detalles.serie}</td>
                            </tr>
                            <tr>
                                <td>{data.detalles.sensor}</td>
                                <td>
                                    <b>Sensor</b>
                                </td>
                                <td>{data.detalles.sensor}</td>
                            </tr>
                            <tr>
                                <td>{data.detalles.botones}</td>
                                <td>
                                    <b>Botones</b>
                                </td>
                                <td>{data.detalles.botones}</td>
                            </tr>
                            <tr>
                                <td>{data.detalles.peso}</td>
                                <td>
                                    <b>Peso</b>
                                </td>
                                <td>{data.detalles.peso}</td>
                            </tr>
                            <tr>
                                <td>{data.detalles.conexion}</td>
                                <td>
                                    <b>Conexión</b>
                                </td>
                                <td>{data.detalles.conexion}</td>
                            </tr>
                            <tr>
                                <td>{data.detalles.dimenciones}</td>
                                <td>
                                    <b>Lar/Anch/Alt</b>
                                </td>
                                <td>{data.detalles.dimenciones}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-xl-4 flex-left'>
                    <img src={data.imgurl} />
                </div>
            </div>
            <style jsx>
                {`
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
            </style>
        </div>
    );
}

export async function getStaticProps() {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    let data = await fetch(`http://localhost:3030/raton`, requestOptions)
        .then((response) => response.text())
        .then((result) => JSON.parse(result))
        .catch((error) => console.log(error));

    data = data.data[0];
    return {
        props: { data },
        revalidate: 10,
    };
}
