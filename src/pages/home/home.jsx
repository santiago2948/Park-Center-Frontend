import styles from './home.module.css';
import {SubmitButton} from '../../components/SubmitButton.jsx';
import { HomeInput } from '../../components/homeInput.jsx';
import {Logo} from '../../components/Logo.jsx';

// Imports from React
import {useState, useEffect} from 'react';

export function HomeScreen() {
    useEffect(() => {
        document.body.classList.add('home-body-bg');
        return () => {
            document.body.classList.remove('home-body-bg');
        };
    }, []);

    const [placa, setPlaca] = useState("");

    const placaFormat = (e) =>{
        let value = e.target.value.toUpperCase();
        if(value.length <= 6) setPlaca(value);
    };

    const redirectAdminPage = () => {
        window.location.href = '/admin';
    }

    return (
            <div className={styles.homeManBox}>
                <Logo />
                <form action="#">
                    <HomeInput value={placa} onChange={placaFormat} placeholder='Placa' />
                    <SubmitButton text="Continuar" className="mb-3 w-100"/>
                </form>
                <p onClick={redirectAdminPage} className={styles.adminQuestion}>¿Eres administrador?</p>
            </div>
        )
}