import styles from './fightCancer.module.css';
import Image from "next/image";

const FightCancer = () => {
    return (
        <div style={{ 
            display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginBottom:'60px'
        }}>
            <h1 className={styles.h1Header}>
                Fight{' '}
                <span style={{ color: '#F7007D' }}>Breast Cancer</span>!
            </h1>
            <p style={{ textAlign: 'center' }}>
                Connect with specialists, learn from experiences and<br /> receive breast cancer treatments
            </p>
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
            <div className={styles.backgroundphone}>
                <Image layout="fill"
                    src='/phoneScreen.png'
                    className={styles.phoneScreen}
                />
            </div>
        </div>
    );

}
export default FightCancer;