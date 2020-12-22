export const Footer = () => {
    return (
        <>
            <footer className='col-12'>
                <p>Copyright &copy; 2020 RatónMouse All Rights Reserved.</p>
            </footer>
            <style jsx>
                {`
                    footer {
                        background: #1a1e25;
                        color: #868c96;
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
