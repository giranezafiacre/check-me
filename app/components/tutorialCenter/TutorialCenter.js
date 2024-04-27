import Image from "next/image";
import styles from './tutorialCenter.module.css';

const TutorialCenter = () => {
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
                        src='/tutorial.png'
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
                            src='/play.png'
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
                            }}>Interactive Self-
                                Check Tutorials</h1>
                        </span>
                        <span>
                            <p style={{
                                fontSize: '20px',
                                color:'#575757'
                            }}>Learn from others and get
                                notified about health tips.</p>

                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TutorialCenter;