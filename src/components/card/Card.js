import React from 'react';

export const Card = () => {
    return (
        <div>
            <div
                className='carousel-slide swiper-slide'
                style={{ width: '200px', marginRight: '10px' }}
            >
                <i
                    data-wishlist-heart='{"id":"6339996", "type": "PRODUCT"}'
                    data-wishlist-heart-tracking='slider_last'
                    data-gtm-event='slider_last.click'
                    data-gtm-payload='{"event_category":"slider_last","event_action":"wishlist.add","event_label":"slider_last.actions","productId":"6339996"}'
                    data-wishlist-heart-active='true'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                    >
                        <path d='M21.317,3.761a5.581,5.581,0,0,0-8.14,0L12,4.994l-1.177-1.23a5.581,5.581,0,0,0-8.14,0,6.211,6.211,0,0,0,0,8.5L3.862,13.5v0L12,22h0l8.138-8.5v0l1.177-1.23A6.211,6.211,0,0,0,21.317,3.761Z'></path>
                    </svg>
                </i>

                <a
                    className='carousel-slideLink'
                    href='/precios/6339996/kindle-paperwhite-8gb-wifi-black-2018.html'
                    data-gtm-event='slider.click'
                    data-gtm-payload='{"event_category":"sliders","event_action":"click","event_label":"last","productid":"6339996"}'
                >
                    <div className='carousel-slideImageWrapper'>
                        <img
                            className='carousel-slideImage'
                            src='https://cdn.idealo.com/folder/Product/6339/9/6339996/s11_produktbild_mittelgross/kindle-paperwhite-8gb-wifi-black-2018.jpg'
                            data-src='https://cdn.idealo.com/folder/Product/6339/9/6339996/s11_produktbild_mittelgross/kindle-paperwhite-8gb-wifi-black-2018.jpg'
                            alt='Kindle Paperwhite 8GB WiFi Black (2018)'
                            width='168'
                            height='140'
                        ></img>

                        <span className='price'>
                            <span className='price-prefix'>desde&nbsp;</span>
                            129,99&nbsp;€
                        </span>

                        <span className='carousel-slideTitle'>
                            Kindle Paperwhite 8GB WiFi Black (2018)
                        </span>

                        <span className='carousel-slideType'>
                            eReader con pantalla táctil
                        </span>

                        <span className='carousel-slideTestnote'>
                            Nota media 8,4/10
                        </span>
                    </div>
                </a>
            </div>
            <style jsx>
                {`
                    /*! CSS Used from: Embedded */
                    a {
                        background-color: transparent;
                    }
                    img {
                        border-style: none;
                    }
                    *,
                    *::before,
                    *::after {
                        box-sizing: inherit;
                    }
                    img {
                        display: inline-block;
                        vertical-align: middle;
                        max-width: 100%;
                        height: auto;
                        -ms-interpolation-mode: bicubic;
                    }
                    div {
                        margin: 0;
                        padding: 0;
                    }
                    i {
                        font-style: italic;
                        line-height: inherit;
                    }
                    a {
                        line-height: inherit;
                        color: #0771d0;
                        text-decoration: none;
                        cursor: pointer;
                    }
                    a:hover,
                    a:focus {
                        color: #0661b3;
                    }
                    a img {
                        border: 0;
                    }
                    @media print {
                        * {
                            background: transparent !important;
                            color: black !important;
                            -webkit-print-color-adjust: economy;
                            color-adjust: economy;
                            box-shadow: none !important;
                            text-shadow: none !important;
                        }
                        a,
                        a:visited {
                            text-decoration: underline;
                        }
                        a[href]:after {
                            content: ' (' attr(href) ')';
                        }
                        img {
                            page-break-inside: avoid;
                        }
                        img {
                            max-width: 100% !important;
                        }
                    }
                    ::-webkit-input-placeholder {
                        color: #787878;
                    }
                    :-ms-input-placeholder {
                        color: #787878;
                    }
                    ::placeholder {
                        color: #787878;
                    }
                    .swiper-slide {
                        flex-shrink: 0;
                        height: 100%;
                        position: relative;
                        width: 100%;
                    }
                    .carousel-slide {
                        box-sizing: border-box;
                        margin-right: 10px;
                        width: 220px;
                    }
                    .carousel-slideTestnote {
                        color: #2d2d2d;
                        font-size: 0.75rem;
                        font-weight: normal;
                        line-height: 2.3;
                    }
                    .carousel-slideLink {
                        background-color: #fff;
                        display: block;
                        min-height: 285px;
                        padding: 20px;
                        position: relative;
                        z-index: 300;
                    }
                    .carousel-slideImageWrapper {
                        height: 140px;
                        margin: 0 auto 15px;
                        position: relative;
                        text-align: center;
                        transition: transform 150ms ease-out;
                    }
                    .carousel-slideImage {
                        height: auto;
                        max-height: 140px;
                        max-width: 100%;
                        width: auto;
                    }
                    .carousel-slideTitle {
                        color: #2d2d2d;
                        display: block;
                        font-size: 0.875rem;
                        font-weight: 700;
                        line-height: 1.2;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .carousel-slideType {
                        max-width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #787878;
                        display: block;
                        font-size: 0.875rem;
                        line-height: 1.5;
                    }
                    .carousel [data-wishlist-heart] {
                        cursor: pointer;
                        position: absolute;
                        right: 10px;
                        top: 10px;
                        z-index: 400;
                    }
                    /*! CSS Used from: Embedded */
                    [data-wishlist-heart] {
                        cursor: pointer;
                        line-height: 1;
                        position: relative;
                        visibility: hidden;
                        z-index: 20;
                    }
                    [data-wishlist-heart][data-wishlist-heart-active] {
                        visibility: visible;
                    }
                    [data-wishlist-heart] svg {
                        fill: transparent;
                        stroke: rgb(7, 113, 208);
                        stroke-width: 1.5px;
                        transform: scale(1.2);
                    }
                `}
            </style>
        </div>
    );
};
