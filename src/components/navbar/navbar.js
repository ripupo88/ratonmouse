import React from 'react';
import './navbar.module.css';

export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
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
                            <a
                                className='nav-link active'
                                aria-current='page'
                                href='/'
                            >
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Marcas
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/productos'>
                                Productos
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/comparador'>
                                Comparador
                            </a>
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
