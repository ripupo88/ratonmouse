import '../styles/global.css';
import Head from 'next/head';
import { Navbar } from '../components/navbar/navbar';
import CookieConsent from 'react-cookie-consent';
import { Footer } from '../components/footer/footer';

function MyApp({ Component, pageProps }) {
    return (
        <html lang='es-ES'>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: ``,
                    }}
                />
                <meta
                    name='Description'
                    content='Pagina especializada en Ratones de PC, recolectamos informacion de diversas fuentes para resumirla en un solo lugar y poderte hacerte la recomendacion que necesitas'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, maximum-scale=5'
                />
                <title>
                    Ratón Mouse. Te ayudamos a comprar el mejor ratón gaming
                </title>
                <link
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
                    rel='stylesheet'
                    integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1'
                    crossorigin='anonymous'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='container-fluid m-0 p-0'>
                <CookieConsent buttonText='aceptar'>
                    Esta web usa cookies
                </CookieConsent>
                <div className=''>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </div>
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
