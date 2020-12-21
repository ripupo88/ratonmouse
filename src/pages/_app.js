import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <html lang='es'>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: ``,
                    }}
                />
                <meta
                    name='Description'
                    content='Pagina especializada en Ratones de PC'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, maximum-scale=5'
                />
                <title>Ratón Mouse</title>
                <link
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
                    rel='stylesheet'
                    integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1'
                    crossorigin='anonymous'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='container-fluid m-0 p-0'>
                <div className=''>
                    <Component {...pageProps} />
                    <footer className='col-12'>
                        <p>
                            Copyright &copy; 2020 RatónMouse All Rights
                            Reserved.
                        </p>
                    </footer>
                </div>
                <style jsx>
                    {`
                        footer {
                            background: #1a1e25;
                            color: #868c96;
                        }

                        footer p {
                            margin: 0;
                            color: #cdcdcd;
                            font-size: 1em;
                            padding: 40px 0;
                            text-align: center;
                        }

                        footer img {
                            width: 44px;
                        }
                    `}
                </style>
            </div>
            <script
                src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js'
                integrity='sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU'
                crossorigin='anonymous'
            ></script>
            <script
                src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js'
                integrity='sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj'
                crossorigin='anonymous'
            ></script>
        </html>
    );
}

export default MyApp;
