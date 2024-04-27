import Image from "next/image";
import styles from './geolocation.module.css';

const Geolocation = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginLeft: '25vw',
                marginRight: '25vw',
                marginBottom: '60px'
            }}>
                <div>
                    <Image layout="fill"
                        src='/geolocalizations.png'
                        className={styles.francisImg}
                    />
                </div>
                <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}>
                    <div>
                        <Image layout="fill"
                            src='/flag.png'
                            className={styles.play}
                        />
                    </div>
                    <div style={{
                    }}>
                        <span>
                            <h1 style={{
                                fontSize: '30px',
                                lineHeight: '40px',
                                marginBottom: '10px'
                            }}>Geolocalization 
                            to Hospitals</h1>
                        </span>
                        <span>
                            <p style={{
                                fontSize: '20px',
                                color:'#575757'
                            }}>Locate and navigate to the 
                            nearest healthcare facilities.</p>

                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Geolocation;