import Image from "next/image";
import styles from './Footer.module.css';
import UpperFooter from './upperFooter';

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div style={{
                    display: 'flex',
                    gap: '20px'
                }}>
                    <div style={{ alignSelf: 'flex-end' }}>
                        <Image layout="fill"
                            src='/leftItem.png'
                            className={styles.subscribe}
                        />
                    </div>
                    <div>
                        <h1 style={{
                            fontWeight: '600',
                            fontSize: '40px',
                            textAlign: 'center',
                            lineHeight: '40px'
                        }}>
                            Subscribe as<br /> Medical
                        </h1>
                        <p style={{
                            textAlign: 'center'
                        }}>
                            Your patient organisation in <br /> one app.
                        </p>
                        <button style={{
                            backgroundColor: '#404375',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            display: 'flex',
                            gap: '10px',
                            borderRadius: '5px',
                            alignItems: 'center',
                            margin: '20px 10px',
                            padding: '10px 20px'
                        }}>
                            <span>
                                <Image layout="fill"
                                    src='/subscribe.png'
                                    className={styles.subscribe}
                                />
                            </span>
                            <span>
                                subscribe as specialist
                            </span>
                        </button>
                    </div>

                    <div style={{ alignSelf: 'flex-start' }}>
                        <Image layout="fill"
                            src='/rightItem.png'
                            className={styles.subscribe}
                        />
                    </div>
                </div>


                <hr style={{
                    borderColor: 'white',
                    opacity: `0.2`,
                    height: `0.5px`,/* Add border to create a line */
                    margin: `60px 0 60px 0`, /* Adjust margin as needed */
                    width: `70vw`
                }} />

                <a style={{ marginBottom: '30px' }}>
                    <Image layout="fill"
                        src='/linkedin.png'
                        className={styles.subscribe}
                    />
                </a>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '40px'
                }}>
                    <a style={{
                        marginRight: '10px'
                    }}>Features</a>
                    <a style={{
                        marginRight: '10px'
                    }}>Updates</a>
                    <a>Imprint</a><br />
                    <a>Privacy Policy</a>

                </p>
            </div>
        </>
    )
}
export default Footer;