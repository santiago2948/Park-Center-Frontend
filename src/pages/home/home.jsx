import styles from './home.module.css';
import {SubmitButton} from '../../components/SubmitButton.jsx';
import { HomeInput } from '../../components/homeInput.jsx';
import {Logo} from '../../components/Logo.jsx';

// Imports from React
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'


export function HomeScreen() {
    useEffect(() => {
        document.body.classList.add('home-body-bg');
        return () => {
            document.body.classList.remove('home-body-bg');
        };
    }, []);

    const [placa, setPlaca] = useState("");
    const [login, setLogin] = useState(false);

    const placaFormat = (e) =>{
        let value = e.target.value.toUpperCase();
        if(value.length <= 6) setPlaca(value);
    };

    const changeToLogin = () => {
        setLogin(login => !login);
    }

    // Login logic would go below here
    const [loginState, setLoginState] = useState(0); // 0: email, 1: password
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });
    }

    return (
            <div className={styles.homeManBox}>
                <Logo />
                {
                    login ? 
                         <form action="#">
                            {loginState === 0 ?
                            <>
                                <HomeInput value={loginForm.email} onChange={handleChange} placeholder='Email' type='email' name='email' />
                                <SubmitButton text="Siguiente" onClick={(e)=> setLoginState(1)} className="mb-3 w-100"/>
                            </>
                            :<>
                                <p><span className={styles.editEmailIcon}><FontAwesomeIcon icon={faPenToSquare} style={{marginRight: "6px"}} onClick={(e) => setLoginState(0)}/></span> Email: {loginForm.email}</p>
                                <HomeInput value={loginForm.password} onChange={handleChange} placeholder='Contraseña' type='password' name='password' />
                                <SubmitButton text="Ingresar" type='submit' className="mb-3 w-100"/>
                            </>    
                            }
                            <p onClick={changeToLogin} className={styles.adminQuestion}>Pagar por placa</p>
                        </form>
                    :<> 
                        <form action="#">
                            <HomeInput value={placa} onChange={placaFormat} placeholder='Placa' />
                            <SubmitButton type='submit' text="Continuar" className="mb-3 w-100"/>
                            <p onClick={changeToLogin} className={styles.adminQuestion}>¿Eres administrador?</p>
                        </form>
                    </> 
                }
                
            </div>
        )
}