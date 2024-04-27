import React from 'react';
import Image from "next/image";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={`header flex items-center h-16 ${styles.header}`}>
            <div className='flex items-center'>
                <div>
                    <Image
                        src="/checkmelogo.png"
                        alt="logo"
                        className="dark:invert"
                        width={40}
                        height={24}
                        priority
                    />
                </div>
                <div className={styles.logoText} >check me</div>
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
                        get started
                    </span>
                </a>
            </div>
        </header>
    );
}

export default Header;
