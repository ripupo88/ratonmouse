export const Footer = () => {
    return (
        <>
            <footer className='col-12 static-bottom'>
                <div className='p-3'>
                    <span>
                        Copyright &copy; 2020 RatónMouse All Rights Reserved.
                    </span>
                    <div className='text-center'>
                        <a href='/aviso-legal'>Aviso Legal </a>
                        <span> - </span>
                        <a href='/cookies'> Cookies </a>
                    </div>
                </div>
            </footer>
            <style jsx>
                {`
                    a {
                        text-decoration: none;
                        color: #ccccff;
                    }
                    a :hover {
                        color: #2121cc;
                    }
                    .vl {
                        border-left: 1px solid white;
                        height: 500px;
                    }
                    footer {
                        display: flex;
                        justify-content: center;
                        background: #1a1e25;
                        color: #868c96;
                        height: 100px;
                        bottom: 0;
                        width: 100%;
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
        </>
    );
};
