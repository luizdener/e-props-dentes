import styles from './CardClientes.module.scss'

import Image from 'next/image'

    export default function CardClientes ({imagem, children}) {
    return (
        <div className={styles.cardClientes}>
            <Image className={styles.imagem} src={imagem}/>

            <section className={styles.section}>
                {children}               
            </section>
            
        </div>
    )
}