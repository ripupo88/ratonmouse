import next from 'next';
import React from 'react';
import { NextSeo } from 'next-seo';

export default function Articulo({ dat }) {
    console.log('dat', dat);
    return (
        <div className='page bgblue col-mio m-auto'>
            <NextSeo
                title={dat.seo.title}
                description={dat.seo.description}
                canonical={dat.seo.url}
                openGraph={{
                    url: dat.seo.url,
                    title: dat.seo.title,
                    description: dat.seo.description,
                    images: [
                        {
                            url: `https://ratonmouse.com/assets/img/${dat.content.img.name}.webp`,
                            width: 800,
                            height: 600,
                            alt: dat.content.img.alt,
                        },
                    ],
                    site_name: 'Ratón Mouse',
                }}
                twitter={{
                    handle: '@ripupo88',
                    site: '@ratonmouse',
                    cardType: 'summary_large_image',
                }}
            />
            <div className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-md-12 ml-md-4 mt-3'>
                    <h1 className='text-center'>{dat.content.h1}</h1>
                    <span className='m-auto lead'>{dat.content.lead}</span>
                    <br />
                    <br />
                    <div className='m-auto mt-3 col-xl-8 m-auto miflex'>
                        <div>
                            <img
                                alt='mejores ratones gaming baratos'
                                width='800'
                                height='500'
                                src='/assets/img/Raton-Gaming-muestra.webp'
                            />
                            {dat.content.img.credit ? (
                                <span className='text-muted'>
                                    Photo by Andreas Haslinger on Unsplash
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div className='indice col-sm-8 mt-5 ml-5'>
                        <div className='h5 hh'>Contenido</div>
                        <ol>
                            {dat.content.tableCont.map((item) => {
                                return (
                                    <li>
                                        <a>{item}</a>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dat.content.html,
                        }}
                    />
                </div>
            </div>
            <style jsx>
                {`
                    li > a {
                        text-decoration: none;
                    }
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

export async function getStaticPaths() {
    let paths = [];
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const res = await fetch(
        `http://161.97.156.161:3030/article`,
        requestOptions
    );
    const resArticles = await res.json();

    resArticles.data?.map((item, key) => {
        const url = item.seo.url;
        paths.push({
            params: {
                art: url,
            },
        });
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const res = await fetch(
        `http://161.97.156.161:3030/article?seo.url=${params.art}`,
        requestOptions
    );
    const data = await res.json();
    console.log(data);
    const dat = data.data[0];

    return { props: { dat } };
}
