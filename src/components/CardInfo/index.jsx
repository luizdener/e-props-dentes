import styles from './CardInfo.module.scss'

export default function CardInfo(props){
    return (
        <div className={styles.cardInfo}>
            <h2>INFORMAÇÕES</h2>
            
            <section>
                {props.children}
            </section>
        </div>
    )
}