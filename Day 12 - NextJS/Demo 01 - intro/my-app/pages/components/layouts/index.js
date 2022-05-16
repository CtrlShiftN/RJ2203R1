import styles from '/styles/layouts/index.module.css';
export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <p>Begin layout</p>
            {children}
            <p>End layout</p>
        </div>
    )
}