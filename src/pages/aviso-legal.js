import React from 'react';

export default function Articulo() {
    return (
        <div className='shadow-sm page bgblue'>
            <div className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-md-12 ml-md-4 mt-3'>
                    <h1 className='text-center'>AVISO LEGAL</h1>
                    <p>
                        <b>Finalidad:</b> La finalidad del sitio ratonmouse.com
                        es recabar información sobre ratones gaming, para poder
                        brindar a los usuarios informacion útil.{' '}
                        <b>No pertenecemos a ningún programa de afiliados.</b>{' '}
                        Somos 100% imparciales y el contenido es en base a
                        criterios reales de la informacion recopilada en
                        diferentes sitios web y tiendas online
                    </p>
                    <p>
                        Los contenidos del Sitio Web tienen únicamente una
                        finalidad <b>informativa y orientativa</b>. Bajo ninguna
                        circunstancia deben usarse ni considerarse como oferta
                        de venta, solicitud de una oferta de compra ni
                        recomendación para realizar cualquier otra operación
                    </p>
                    <p>
                        El Titular se reserva el derecho a modificar, suspender,
                        cancelar o restringir el contenido del Sitio Web, los
                        vínculos o la información obtenida a través del sitio
                        Web, sin necesidad de previo aviso.
                    </p>
                    <p>
                        El Titular <b>no es responsable</b> de los daños y
                        perjuicios que pudieran derivarse de la utilización de
                        la información del sitio Web o de la contenida en las
                        redes sociales del Titular.
                    </p>
                    <h2>Limitación de responsabilidad</h2>
                    <p>
                        La información y servicios incluidos o disponibles a
                        través de este sitio Web pueden incluir incorrecciones o
                        errores tipográficos. De forma periódica el Titular
                        incorpora mejoras y/o cambios a la información contenida
                        y/o los Servicios que puede introducir en cualquier
                        momento.
                    </p>
                    <p>
                        El Titular no declara ni garantiza que los servicios o
                        contenidos sean interrumpidos o que estén libres de
                        errores, que los defectos sean corregidos, o que el
                        servicio o el servidor que lo pone a disposición estén
                        libres de virus u otros componentes nocivos sin
                        perjuicio de que el Titular realiza todos los esfuerzos
                        en evitar este tipo de incidentes.
                    </p>
                    <p>
                        Titular declina cualquier responsabilidad en caso de que
                        existan interrupciones o un mal funcionamiento de los
                        Servicios o contenidos ofrecidos en Internet, cualquiera
                        que sea su causa. Asimismo, el Titular no se hace
                        responsable por caídas de la red, pérdidas de negocio a
                        consecuencia de dichas caídas, suspensiones temporales
                        de fluido eléctrico o cualquier otro tipo de daño
                        indirecto que te pueda ser causado por causas ajenas a
                        el Titular.
                    </p>
                    <p>
                        Antes de tomar decisiones y/o acciones con base a la
                        información incluida en el sitio Web, el Titular le
                        recomienda comprobar y <b>contrastar la información</b>
                        recibida con otras fuentes.
                    </p>
                    <p>
                        <b>Contacto:</b> En caso de que usted tenga cualquier
                        duda acerca de estas Condiciones legales o quiera
                        realizar cualquier comentario sobre este sitio Web,
                        puede enviar un mensaje de correo electrónico a la
                        dirección info@antzury.com
                    </p>
                </div>
            </div>
            <style jsx>
                {`
                    img {
                        max-width: 100%;
                    }
                    @media (max-width: 600px) {
                    }

                    .cajatexto p {
                        text-align: justify;
                    }
                `}
            </style>
        </div>
    );
}
