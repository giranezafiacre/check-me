import Image from "next/image";
import styles from './access.module.css';

const Access = () => {
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
                <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}>
                    <div>
                        <Image layout="fill"
                            src='/access.png'
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
                            }}>Access to 
                            Specialists</h1>
                        </span>
                        <span>
                            <p style={{
                                fontSize: '20px',
                                color:'#575757'
                            }}>Search for and connect with <br/>
                            healthcare specialists.</p>

                        </span>
                    </div>
                </div>
                
                <div>
                    <Image layout="fill"
                        src='/accessPhone.png'
                        className={styles.francisImg}
                    />
                </div>
            </div>
        </>
    )
}
export default Access;