import '../styles/global.css';

import Head from 'next/head';
import { Navbar } from '../components/navbar/navbar';
import CookieConsent from 'react-cookie-consent';
import { Footer } from '../components/footer/footer';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta charSet='utf-8' />
                <script
                    dangerouslySetInnerHTML={{
                        __html: ``,
                    }}
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, maximum-scale=5'
                />
                {/* <link
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
                    rel='stylesheet'
                    integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1'
                    crossOrigin='anonymous'
                /> */}
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />
            <div className='container-fluid m-auto m-0 p-0'>
                <CookieConsent buttonText='aceptar'>
                    Esta web usa usa cookies tecnicas impresindibles para el
                    funcionamiento del sitio
                </CookieConsent>
                <div className=''>
                    <Component {...pageProps} />
                </div>
            </div>
            <Footer />
            {/* <script
                src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js'
                integrity='sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU'
                crossOrigin='anonymous'
            ></script>
            <script
                src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js'
                integrity='sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj'
                crossOrigin='anonymous'
            ></script> */}
        </div>
    );
}

export default MyApp;
