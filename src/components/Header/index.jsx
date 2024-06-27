import styles from './Header.module.scss'

import { FaTooth } from 'react-icons/fa'

import Image from 'next/image'

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={`limitedWidth ${styles['limitedWidth']}`}>
                
                <p><FaTooth/> Dentes Saudáveis</p>
            </div>
        </header>
    )
}