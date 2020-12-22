import { useRouter } from 'next/router';

export const Modelo = () => {
    const router = useRouter();
    const { marca, serie, modelo } = router.query;

    return (
        <div className='row'>
            <div className='col-md-8'>
                <img src='/assets/img/ratoninalambrico.jpg' />
            </div>
        </div>
    );
};

export default Modelo;
