import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './navbar.module.scss';

export const Navbar = () => {
    const router = useRouter();
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>
                    Ratón Mouse
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div
                    className='collapse navbar-collapse wrapper navbar-wrapper'
                    id='navbarNavDropdown'
                >
                    <ul className='navbar-nav navmio navbar22'>
                        <li className='nav-item'>
                            <Link className='active' href='/'>
                                <a
                                    className={`nav-link ${
                                        router.pathname == '/' ? 'active' : ''
                                    }`}
                                >
                                    Home
                                </a>
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link href='/marcas'>
                                <a
                                    className={`nav-link ${
                                        router.pathname == '/marcas'
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    Marcas
                                </a>
                            </Link>
                        </li> */}
                        {/* <li className='nav-item'>
                            <Link href='/productos'>
                                <a
                                    className={`nav-link ${
                                        router.pathname == '/productos'
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    Productos
                                </a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/comparador'>
                                <a
                                    className={`nav-link ${
                                        router.pathname == '/comparador'
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    Comparador
                                </a>
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link href='/articulo/mejores-ratones-gaming-baratos'>
                                <a
                                    className={`nav-link ${
                                        router.pathname == '/articulo'
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    Artículo
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>
                {`
                    .mi-bg-dark a {
                        color: white;
                        font-weight: 400;
                    }
                    .mi-bg-dark {
                        background-color: #002ffa;
                    }
                    .navmio {
                        width: 100%;
                        justify-content: center;
                    }
                `}
            </style>
        </nav>
    );
};
