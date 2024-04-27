import Image from "next/image";
import styles from './FrancisSection.module.css';

const FrancisSection = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '60px',
                background: 'transparent'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                        alignItems: 'top'
                    }}>
                        <div>
                            <Image layout="fill"
                                src='/fancis.png'
                                className={styles.francisImg}
                            />
                        </div>
                        <div>
                            <p style={{
                                fontWeight: 600,

                            }}>Hi, I am Francis and this is my sister's legacy:</p>
                            <h3 style={{
                                fontWeight: '600',
                                fontSize: '30px',
                                lineHeight: '30px',
                            }}>
                                How CheckMe Saves Lives<br />
                                and Honors Her Memory
                            </h3>
                        </div>
                    </div>
                    <div style={{
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        color:'#575757'
                    }}>
                        <p style={{
                            fontSize: '20px',
                        }}>
                            Every day, I use the CheckMe app to honor my sister's memory,<br />
                            connecting with specialists, receiving personalized care plans, and<br />
                            building a community of support, all in the fight against breast cancer.
                        </p>
                    </div>
                    <div>
                        <a className={styles.anchor} href="https://play.google.com/store/apps/details" target="_blank" rel="noopener noreferrer">
                            <span>
                                <Image layout="fill"
                                    src='/playstore.png'
                                    className={styles.playstoreImage}
                                />
                            </span>
                            <span className='text-white'>
                                Download from Google Play Store
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FrancisSection;