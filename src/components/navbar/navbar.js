import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './navbar.module.css';

export const Navbar = () => {
    const router = useRouter();
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>
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
                    className='collapse navbar-collapse'
                    id='navbarNavDropdown'
                >
                    <ul className='navbar-nav navmio'>
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
                        <li className='nav-item'>
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
                        </li>
                        <li className='nav-item'>
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
                        </li>
                        <li className='nav-item dropdown'>
                            <a
                                className='nav-link dropdown-toggle'
                                href='#'
                                id='navbarDropdownMenuLink'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Articulos
                            </a>
                            <ul
                                className='dropdown-menu'
                                aria-labelledby='navbarDropdownMenuLink'
                            >
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Top 10
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Por precio
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Recomendaciones
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>
                {`
                    .navmio {
                        width: 100%;
                        justify-content: center;
                    }
                `}
            </style>
        </nav>
    );
};
