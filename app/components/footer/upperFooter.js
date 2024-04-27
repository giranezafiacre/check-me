import styles from './Footer.module.css';

const UpperFooter = () => {
    return (
        <div className={styles.upperFooter}>
            <div>
                <h1>100<br />+</h1>
                <p>Active</p>
            </div>
            <div>
                <h1>1K<br />+</h1>
                <p>Medical</p>
            </div>
            <div>
                <h1>100<br />%</h1>
                <p>Free for</p>
            </div>
        </div>
    )
}
export default UpperFooter