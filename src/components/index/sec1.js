import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export const Sec1 = () => {
    return (
        <div className='page bgblue '>
            <NextSeo
                title='Ratones gaming | Todos lo que necesitas saber sobre ellos.'
                description='Página especializada en Ratones de PC, recolectamos informacion de diversas fuentes y la resumimos para que puedas hacer la mejor compra posible. Cuando compramos algo'
                canonical='https://ratonmouse.com/'
                openGraph={{
                    url: 'https://ratonmouse.com/',
                    title: 'Ratones gaming | Todos lo que necesitas saber',
                    description:
                        'Página especializada en Ratones de PC, recolectamos informacion de diversas fuentes y la resumimos para que puedas hacer la mejor compra posible. Cuando compramos algo',
                    images: [
                        {
                            url: 'https://i.ibb.co/zSJrBHf/miraton.webp',
                            width: 800,
                            height: 600,
                            alt: 'Ratón logitech G502',
                        },
                    ],
                    site_name: 'Ratonmouse',
                }}
                twitter={{
                    handle: '@ripupo88',
                    site: '@ratonmouse',
                    cardType: 'summary_large_image',
                }}
            />
            <div className='headerimg'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-7'>
                        <h1 className='text-center m-5'>
                            Ratones Gaming <br /> (la guía)
                        </h1>
                        <p className='lead-mio'>
                            La selección de un buen ratón gaming, para que nos
                            acompañe en nuestros juegos, es una tarea difícil.
                            En esta página te lo ponemos fácil, para potenciar
                            su uso con el mejor rendimiento posible.
                        </p>
                        <p className='lead-mio'>
                            Para ello, hemos seleccionado los{' '}
                            <strong>mejores ratones gaming</strong> del 2020 y
                            que siguen en el top de ventas en 2021 para que
                            puedas elegir, entre una gran variedad, el que más
                            se ajuste a tu gusto.
                        </p>
                        <p className='lead-mio'>
                            El objetivo, no es que esta sea tu única guía de
                            recomendación, queremos que aprendas los conceptos
                            más importantes, para que entiendas el por qué un
                            ratón es mejor que otro.
                        </p>
                    </div>
                </div>
            </div>
            <div className='sec2'>
                <div className='row'>
                    <div className='col-md-6 m-auto'>
                        <h2>A la hora de comprar mi ratón</h2>
                        <br />
                        <p>
                            El Ratón, ese periférico tan importante a la hora de
                            jugar y sobre todo de{' '}
                            <strong>competir en línea</strong>, y que, sin
                            embargo, muchas veces infravaloramos. Como norma
                            general cuando vamos a comprar, nos decantamos por
                            el más bonito o el más barato, sin tener en cuenta
                            otros muchos aspectos, que pueden tener una
                            influencia directa en nuestra{' '}
                            <strong>experiencia de juego</strong>.
                        </p>
                        <p>
                            Aspectos como el sensor, el peso, los DPI, la
                            conectividad, la ergonomía o el número de botones y
                            si son programables o no, los solemos pasar por
                            alto. Desarrollar una comparativa que te servirá de
                            guía para definir con claridad{' '}
                            <strong>cuál es el mejor ratón gaming</strong>, es
                            el objetivo.
                        </p>
                        <p>
                            Si estás pensando{' '}
                            <strong>comprar un mouse gamer</strong> o buscas
                            información útil sobre estos periféricos, sin duda
                            has llegado al sitio correcto. Aquí abordaremos
                            temas sobre cada uno de los aspectos, que deberías
                            tener en cuenta antes de adquirir uno.
                        </p>
                    </div>
                    <div className='col-xl-2 col-md-4 col-6 m-auto order-md-first'>
                        <img
                            width='322.984'
                            height='250.531'
                            alt='informacion sobre ratones gaming'
                            className='p-sm-5 m-5 m-auto'
                            src='/assets/svg/comprar.svg'
                        />
                        <div className='miflex mt-5'>
                            <a className='mibtn' href='#' role='button'>
                                APRENDER MÁS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nopadding'>
                <div className='m-0 p-0 pb-5 nopadding'>
                    <div className='cajatexto  ml-md-4 m-auto nopadding'>
                        <div className='m-auto'>
                            <h2 className='text-center'>
                                Guía de compra (básica)
                            </h2>
                            <div className='lead-mio text-center mb-5'>
                                Aspectos importantes para tener en cuenta a la
                                hora de comprar un ratón gaming
                            </div>
                            <div className='row nopadding mt-5'>
                                <div className='col-md-7 m-auto row'>
                                    <div className='col-md-8 m-auto'>
                                        <h3>DPI:</h3>
                                        <p>
                                            Las siglas DPI (Dots Per Inch) en
                                            inglés y que en español significa
                                            puntos o píxeles por pulgada. No es
                                            más que, la{' '}
                                            <strong>
                                                cantidad de píxeles que recorre
                                                el puntero en el monitor
                                            </strong>
                                            , por cada pulgada que se desplaza
                                            el ratón, es decir, cuanto más alto
                                            sea el valor DPI mayor será la
                                            sensibilidad del ratón al movimiento
                                            del cursor en la pantalla de nuestro
                                            monitor.
                                        </p>
                                        <p>
                                            Saber cuántos DPI puede alcanzar
                                            nuestro ratón es muy importante, ya
                                            que en la actualidad los monitores
                                            varían el tamaño constantemente y
                                            agregan cada vez más pixeles. Es{' '}
                                            <strong>
                                                importante para los gamers
                                            </strong>{' '}
                                            conocer su rendimiento, debido a que
                                            puede verse totalmente afectado o
                                            mejorado dependiendo de los DPI de
                                            su periférico.
                                        </p>
                                        <p>
                                            El sensor es una parte importante
                                            del ratón, existen{' '}
                                            <strong>ópticos y láser</strong>. El
                                            nivel de precisión y la superficie
                                            donde puede o no funcionar varia uno
                                            del otro. Nosotros normalmente
                                            elegimos los ópticos, pero más que
                                            el sensor que tenga nuestro mouse
                                            nos interesa los DPI. Si tu ratón no
                                            tiene los suficientes, tendrás que
                                            desplazar la mano muchas veces y
                                            terminarás de jugar realmente
                                            exhausto.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-5 m-auto p-0'>
                                    <img
                                        alt='Mouse gaming DPI'
                                        src='https://i.ibb.co/6gKcwMB/mouse-gaming-dpi-2.webp'
                                    />
                                </div>
                            </div>
                            <div className='row nopadding mt-5'>
                                <div className='col-md-5 m-auto'>
                                    <img
                                        alt='sistema de ajuste de peso re ratones gaming'
                                        src='https://i.ibb.co/CP3Vw0z/steelseries-pesas.webp'
                                    ></img>
                                </div>
                                <div className='col-md-7 m-auto row'>
                                    <div className='col-md-8 m-auto'>
                                        <h3>Peso:</h3>
                                        <p>
                                            El peso que debes elegir depende
                                            mucho del uso que le quieras dar.
                                            Para un uso doméstico o de oficina
                                            se busca la comodidad y lo ligero
                                            que sea el dispositivo puede ayudar
                                            en eso. Algunos jugadores también
                                            optan por los más ligeros.
                                        </p>
                                        <p>
                                            La otra cara de la moneda son los
                                            GAMERS, para quienes el peso se
                                            convierte en aliado a la hora de
                                            tener{' '}
                                            <strong>
                                                máxima precisión, sobre todo en
                                                juegos
                                            </strong>{' '}
                                            que requieran movimientos tanto
                                            rápidos como precisos.
                                        </p>
                                        <p>
                                            Hay que entender que si mezclamos
                                            muchos DPI con un peso ligero el
                                            ratón se va a volver casi
                                            incontrolable. Por suerte muchos
                                            ratones gaming vienen con un{' '}
                                            <strong>
                                                sistema de ajuste de peso
                                            </strong>{' '}
                                            para que lo puedas regular a tu
                                            gusto.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row nopadding mt-5'>
                                <div className='col-md-5 m-auto p-5'>
                                    <img
                                        alt='raton corsair con botonera lateral'
                                        src='https://i.ibb.co/pvsm6dn/raton-corsair-botones.webp'
                                    ></img>
                                </div>
                                <div className='col-md-7 m-auto row'>
                                    <div className='col-md-8 m-auto'>
                                        <h3>Botones:</h3>
                                        <p>
                                            El número de botones al igual que
                                            los otros aspectos, agrega comodidad
                                            para todo tipo de tareas. Puedes
                                            tener un atajo para copiar y pegar o
                                            para navegar por tus aplicaciones.
                                        </p>
                                        <p>
                                            Es importante resaltar que los
                                            ratones con un número elevado de
                                            botones{' '}
                                            <strong>
                                                están pensados para juegos que
                                                los requieren
                                            </strong>
                                            . Por ejemplo, juegos donde
                                            necesitas realizar una serie de
                                            acciones en corto plazo tiempo.
                                        </p>
                                        <p>
                                            Después de lo expuesto, es el
                                            momento de saber con claridad el uso
                                            que le vas a dar al ratón, para
                                            poder elegir uno con los botones
                                            suficientes. Normalmente estos
                                            vienen con un software para{' '}
                                            <strong>
                                                programar la función de cada
                                                botón
                                            </strong>{' '}
                                            y de esta forma el ratón queda
                                            personalizado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row nopadding mt-5'>
                                <div className='col-md-7 m-auto row'>
                                    <div className='col-md-8 m-auto'>
                                        <h3>Ergonomía:</h3>
                                        <p>
                                            Este aspecto es fundamental para la
                                            comodidad, el hecho que{' '}
                                            <strong>
                                                nuestra mano ajuste
                                                perfectamente en el ratón
                                            </strong>{' '}
                                            y cada botón quede al alcance de
                                            nuestros dedos es crucial para
                                            disfrutar de una experiencia
                                            agradable.
                                        </p>
                                        <p>
                                            Dependiendo de si{' '}
                                            <strong>
                                                tu mano es grande o pequeña
                                            </strong>{' '}
                                            vas a tener que optar por un modelo
                                            u otro. Dentro de este grupo de
                                            ratones ergonómicos entran los
                                            verticales, estos pueden resultar
                                            cómodos para algunas personas, pero
                                            pocas veces se usan para jugar.
                                        </p>
                                        <p>
                                            Lamentablemente este aspecto solo lo
                                            podremos comprobar cuando tengamos
                                            el equipo en nuestras manos. Aunque
                                            podemos tomar de referencia las
                                            imágenes del producto, así como las
                                            medidas.{' '}
                                            <strong>
                                                Si vas a pasar horas jugando
                                            </strong>
                                            , te recomendamos que busques un
                                            ratón que sea{' '}
                                            <strong>cómodo</strong> para ti.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-5 m-auto p-5'>
                                    <img
                                        alt='raton ergonomico'
                                        src='https://i.ibb.co/KbxLrcv/ergonomic-mouse.webp'
                                    ></img>
                                </div>
                            </div>
                            <div className='row nopadding mt-5'>
                                <div className='col-md-7 m-auto row'>
                                    <div className='col-md-8 m-auto'>
                                        <h3>Conectividad:</h3>
                                        <p>
                                            En este aspecto tenemos dos
                                            opciones:{' '}
                                            <strong>
                                                cableado o inalámbrico
                                            </strong>
                                            , dependiendo del gusto y la
                                            necesidad. Nosotros solemos
                                            recomendar el cableado siempre que
                                            sea posible. Sin embargo, con el
                                            avance de la tecnología han llegado
                                            al mercado dispositivos
                                            inalámbricos, que en cuanto a
                                            rendimiento se refiere la diferencia
                                            se hace prácticamente imperceptible.
                                        </p>
                                        <p>
                                            En el ámbito de los inalámbricos, se
                                            pueden encontrar dos tipos de
                                            conexiones que predominan:{' '}
                                            <strong>
                                                Bluetooth y la inalámbrica común
                                            </strong>
                                            . Ambas tienen sus ventajas,
                                            nosotros recomendamos la común
                                            porque está más enfocada a la
                                            eficiencia, que es siempre lo que
                                            buscamos los gamers para poder
                                            competir a gran nivel.
                                        </p>
                                        <p>
                                            Por otro lado, los cableados nos
                                            brindan varias ventajas. Los{' '}
                                            <strong>
                                                tiempos de respuesta
                                            </strong>{' '}
                                            suelen rondar en los mínimos
                                            actuales, además de olvidarnos por
                                            completo de las pilas o las
                                            baterías, que de manera inoportuna
                                            nos suelen dar problemas cuando de
                                            inalámbrico se trata. Otro punto
                                            importante es que han mejorado mucho
                                            el material de fabricación, los
                                            cables trenzados actuales son muy
                                            duraderos y también más largos para
                                            una mayor movilidad.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-5 m-auto'>
                                    <img
                                        alt='raton inalambrico'
                                        src='https://i.ibb.co/Y37VQCW/raton-inalambrico.webp'
                                    ></img>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    {/* Aqui la tecera saccion, las tres secciones con articulos */}
                    <div className='nopadding'>
                        <div className='row nopadding mitext'>
                            <div className='col-sm-4 fondo1 p-5 miflex'>
                                <div>
                                    <div className='h4 card-title'>
                                        <a href='#'>
                                            MEJORES RATONES GAMING 2021
                                        </a>
                                    </div>
                                    <p className='card-text mitext'>
                                        La mejor compra será, cuando existe un
                                        equilibrio calidad-precio. En esta
                                        página te orientamos para que hagas la
                                        mejor elección y así seas un buen
                                        gamer...
                                    </p>
                                    <a className='muted-text' href='#'>
                                        leer más
                                    </a>
                                </div>
                            </div>
                            <div className='col-sm-4 fondo2 p-5 miflex'>
                                <div>
                                    <div className='h4 card-title'>
                                        <a href='#'>RATÓN INALÁMBRICO</a>
                                    </div>
                                    <p className='card-text mitext'>
                                        Para los que buscan{' '}
                                        <strong>la comodida</strong> de no tener
                                        que lidiar con el molesto cable y y
                                        quieren sentirses totalmente libre,
                                        aunque tendras que preocuparte por la
                                        batería...
                                    </p>
                                    <a className='muted-text' href='#'>
                                        leer más
                                    </a>
                                </div>
                            </div>
                            <div className='col-sm-4 fondo3 p-5 miflex'>
                                <div>
                                    <div className='h4 card-title'>
                                        <a href='#'>RATONES GAMING CON CABLE</a>
                                    </div>
                                    <p className='card-text '>
                                        no quieres estar pendiente todo el día
                                        de la carga que le queda a la batería,{' '}
                                        <strong>juega sin limite</strong> y
                                        disfruta de tiempos de respuesta casi
                                        inigualables...
                                    </p>
                                    <a className='muted-text' href='#'>
                                        leer más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nopadding'>
                        <div className='row nopadding'>
                            <div className='col-md-6 nopadding'>
                                <img
                                    alt='mouse gamer logitech'
                                    src='https://i.ibb.co/zSJrBHf/miraton.webp'
                                />
                            </div>
                            <div className='col-md-6 sec2 p-xl-3 miflex'>
                                <div className='p-xl-5'>
                                    <h2 className='text-center'>
                                        Tu ratón para jugar
                                    </h2>
                                    <br />
                                    <p>
                                        Necesitas conocer qué tipo de ratón
                                        gaming es el ideal para sacarle el
                                        máximo provecho en tu juego favorito.
                                        Dependiendo si juegas Shooter, RPG, o
                                        algún otro genero juego vas a tener que
                                        comprar un tipo de ratón u otro.
                                    </p>

                                    <div className='miflex mt-5'>
                                        <a
                                            className='mibtn'
                                            href='#'
                                            role='button'
                                        >
                                            Para juegos MMO
                                        </a>
                                        <a
                                            className='mibtn'
                                            href='#'
                                            role='button'
                                        >
                                            Para juegos FPS
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5 miflex'>
                        <div className='m-auto'>
                            <div className='miflex mb-5'>
                                <h2>Principales marcas de ratones</h2>
                            </div>
                            <div className='miflex row'>
                                <div className='col-sm-2 col-6 m-2'>
                                    <img
                                        width='165'
                                        height='165'
                                        title='Logitech'
                                        alt='logotipo marca logitech'
                                        src='https://i.ibb.co/qszf5c1/logitech.webp'
                                    />{' '}
                                </div>
                                <div className='col-sm-2 col-6 m-2'>
                                    {' '}
                                    <img
                                        width='165'
                                        height='165'
                                        title='Razer'
                                        alt='logotipo marca Razer'
                                        src='https://i.ibb.co/DzPJJb7/razer.webp'
                                    />{' '}
                                </div>
                                <div className='col-sm-2 col-6 m-2'>
                                    {' '}
                                    <img
                                        width='165'
                                        height='165'
                                        title='Corsair'
                                        alt='logotipo marca Corsair'
                                        src='https://i.ibb.co/fv2d8jR/corsair.webp'
                                    />
                                </div>
                                <div className='col-sm-2 col-6 m-2'>
                                    <img
                                        width='165'
                                        height='165'
                                        title='Mars Gaming'
                                        alt='logotipo marca Marz Gaming'
                                        src='https://i.ibb.co/NTg0DTv/mars.webp'
                                    />
                                </div>
                            </div>
                            <div className='miflex row'>
                                <div className='col-sm-2 col-6 m-2'>
                                    <img
                                        width='165'
                                        height='165'
                                        title='Steelseries'
                                        alt='logotipo marca Steelseries'
                                        src='https://i.ibb.co/wW1WZ4r/steelseries.webp'
                                    />{' '}
                                </div>
                                <div className='col-sm-2 col-6 m-2'>
                                    {' '}
                                    <img
                                        width='165'
                                        height='165'
                                        title='Asuz ROG'
                                        alt='logotipo marca Asuz ROG'
                                        src='https://i.ibb.co/8Ph9nF0/asuz.webp'
                                    />{' '}
                                </div>
                                <div className='col-sm-2 col-6 m-2'>
                                    {' '}
                                    <img
                                        width='165'
                                        height='165'
                                        title='Zowie'
                                        alt='logotipo marca Zowie'
                                        src='https://i.ibb.co/7WGTgLq/sowie.webp'
                                    />
                                </div>
                                <div className='col-sm-2 col-6 m-2'>
                                    <img
                                        width='165'
                                        height='165'
                                        title='Cooler Master'
                                        alt='logotipo marca Cooler Master'
                                        src='https://i.ibb.co/7zSrFLy/cooler.webp'
                                    />
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    {/* <div className='indice col-sm-6 ml-auto mt-5'>
                        <div className='h5'>
                            Top 5 recomendados por RatonMouse
                        </div>
                        <ol>
                            <li>
                                <a href='/Logitech-G/G502-Hero/910-005471'>
                                    Logitech G502 Hero
                                </a>
                            </li>
                            <li>
                                <a href='/Corsair/Gaming-M65-RGB-Elite-FPS/CH-9309111-EU'>
                                    Corsair M65 Elite
                                </a>
                            </li>
                            <li>
                                <a href='/Logitech-G/G502-Hero/910-005471'>
                                    Logitech G502 Hero
                                </a>
                            </li>
                            <li>
                                <a href='/Corsair/Gaming-M65-RGB-Elite-FPS/CH-9309111-EU'>
                                    Corsair M65 Elite
                                </a>
                            </li>
                            <li>
                                <a href='/Logitech-G/G502-Hero/910-005471'>
                                    Logitech G502 Hero
                                </a>
                            </li>
                        </ol>
                    </div> */}
                </div>
            </div>
            <style jsx>
                {`
                .mibtn:hover{
                    background-color: #070086;
                }
                .mibtn{
                    font-weight: 400;
                    text-decoration: none;              
                    color:#ddd;
                    border: solid 1px black;
                    border-radius:100px;
                    margin-right:1em;
                    padding: 0.6em;
                    background-color: #2703A6;
                }
                    .nopadding {
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    .fondo1 {
                        background-color: #000000;
                    }
                    .fondo2 {
                        background-color: #151515;
                    }
                    .fondo3 {
                        background-color: #080808;
                    }
                    .card {
                        background-color: #f2b705;
                    }
                    .sec2 {
                        padding: 1em 1em 4em 1em;
                        background-color: #f2b705;
                        color: #2a2a2a;
                    }
                    .sec3 > div {                        
                        display:flex;                        
                        height:22em;
                    }

                    .sec3 {
                        background-color: #141259;
                        color: #eaeaea;
                    }
                    .headerimg {                        
                        padding: 1.2em;
                        color: #dddddd;
                        background: url('https://i.ibb.co/hB2MtgR/headerratongaming.webp');
                        background-repeat: no-repeat;
                        background-size: cover;                        
                        background-position: right;
                    }
                    @media (max-width : 600px){
                        .headerimg { 
                            background: #000;
                        }
                    }
                    
                    }
                    .fondo-mio {
                        background: url('./assets/svg/fondoazul.svg');
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    img {
                        width: 100%;
                        height: auto;
                    }
                    .mitext > div {
                        min-height: 200px;
                        color: #c8c8c8
                    }
                    .mitext a{
                        text-decoration: none;
                        color: #b8b8b8;
                    }
                    .mitext a:hover{
                        text-decoration: none;
                        color: #b8b8e8;
                    }
                    .mitext p {
                        color: #989898;
                        font-size: 0.9em;
                        line-height: 1.3em;
                    }
                    @media (max-width: 600px) {
                    }

                    .cajatexto p {
                        text-align: left;
                    }
                `}
            </style>
        </div>
    );
};
