import next from 'next';
import React from 'react';
import Head from 'next/head';

export default function Articulo(props) {
    return (
        <div className='page bgblue col-mio m-auto'>
            <Head>
                <title>Te aaayudamos</title>
            </Head>
            <div
                dangerouslySetInnerHTML={{
                    __html: `
                    <h1>Ratones inlámbricos</h1>
                    <div class="lead" />para que no te sientas atado a nada</div>
                    <br/>
                    <h2>
    <span>¿La mejor tecnología para un ratón inalámbrico?</span
    ><br />
</h2>
<p>
    la mejore tecnología siempre será la radiofrecuencia, aunque ya contamos con
    ratones bluetooth no se comprara, la única ventaja que tiene el bluetooth es
    que se pude conectar sin el receptor del ratón<br />
</p>
<p>
    También contamos con los que se conectan por cable, pero este tema lo vamos
    a abordar en un diferente articulo, Aquí nos centramos directamente en los
    ratones inalámbricos
</p>`,
                }}
            ></div>
            <style jsx>
                {`
                    .miflex {
                        display: flex;
                        justify-content: center;
                    }
                    .hh {
                        color: #333377;
                    }
                    a {
                        color: #444499;
                        font-weight: 400;
                    }
                    .col-mio {
                        max-width: 800px;
                    }
                    h2 {
                        margin-bottom: 1em;
                    }

                    @media (max-width: 600px) {
                    }

                    .cajatexto p {
                    }
                `}
            </style>
        </div>
    );
}

// export async function getStaticPaths() {
//     // let paths = [];
//     // const requestOptions = {
//     //     method: 'GET',
//     //     redirect: 'follow',
//     // };
//     // const res = await fetch(`http://localhost:3030/raton`, requestOptions);
//     // const datamia = await res.json();

//     // datamia.data?.map((item, key) => {
//     //     const marca = item.detalles.marca.replace(/[\. ,:-]+/g, '-');
//     //     const serie = item.detalles.serie.replace(/[\. ,:-]+/g, '-');
//     //     const modelo = item.detalles.modelo.replace(/[\. ,:-]+/g, '-');
//     //     paths.push({
//     //         params: {
//     //             marca,
//     //             art: 'Mejores ratones gaming baratos',
//     //         },
//     //     });
//     // });

//     return {
//         paths: [
//             {
//                 params: {
//                     art: 'Mejores-ratones-gaming-baratos',
//                 },
//             },
//         ],
//         fallback: true,
//     };
// }

// export async function getStaticProps({ params }) {
//     // const requestOptions = {
//     //     method: 'GET',
//     //     redirect: 'follow',
//     // };
//     // const res = await fetch(
//     //     `http://localhost:3030/raton?detalles.modelo=${params.modelo}`,
//     //     requestOptions
//     // );
//     // const data = await res.json();
//     // const dat = data.data[0];

//     return { props: { a: '' } };
// }
