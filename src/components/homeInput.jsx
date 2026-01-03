import styles from '../pages/home/home.module.css';

export function HomeInput({ value, onChange, placeholder, type = 'text' }) {
    return (
        <input
            value={value}
            onChange={onChange}
            className={`form-control mb-3 ${styles.placaInput}`}
            type={type}
            placeholder={placeholder}
        />
    );
} 