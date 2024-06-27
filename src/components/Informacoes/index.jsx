import CardInfo from '../CardInfo'

import styles from  './Informacoes.module.scss'

import Image from 'next/image'

export default function Informacoes(){
    return (
        <div className={styles.informacoes}>
            <section className={`limitedWidth ${styles['limitedWidth']}`}>
                <CardInfo>
                    <ul>
                        <li>Segunda - 09:00 às 18:00</li>
                        <li>Terça - 09:00 às 18:00</li>
                        <li>Quarta - 09:00 às 18:00</li>
                        <li>Quinta - 09:00 às 18:00</li>
                        <li>Sexta - 09:00 às 17:00</li>
                        <li>Sábado - 09:00 às 12:00</li>
                    </ul>
                </CardInfo>

                <CardInfo>
                    <div>
                        <Image/>
                        <p>Dra. Ana - Ortodontista</p>
                        <p>Segundas e sextas</p>
                    </div>
                    <div>
                        <Image/>
                        <p>Dr. Carlos - Endodontia</p>
                        <p>Terças e quartas</p>
                    </div>
                </CardInfo>
                
                <CardInfo>
                    <p>Ligue para agendar uma consulta:</p>
                    <p>(21) 3699-9999</p>
                    <p>(21) 97788-5566</p>
                </CardInfo>
            </section>
        </div>
    )
}