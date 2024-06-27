import CardClientes from '../CardClientes'
import styles from './Depoimentos.module.scss'

import negro from '/public/homemnegro.jpg'
import negra from '/public/mulhernegra.jpg'
import branca from '/public/mulherbranca.jpg'

export default function Depoimentos(){

    const clientes = [
        {
            nome: 'Alberto',
            depoimento: 'Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado.',
            imagem: negro
        },

        {
            nome: 'Eliana',
            depoimento: 'Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado.',
            imagem: negra
        },
        {
            nome: 'Carla',
            depoimento: 'Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado.',
            imagem: branca
        }
    ]

    return (
        <div className={styles.depoimentos}>
            <div className={`limitedWidth ${styles['limitedWidth']}`}>
                <h2>VEJA O QUE NOSSOS <strong>CLIENTES</strong> ESTÃO FALANDO...</h2>
                <section className={styles.section}>
                    {clientes.map((cliente, index) => (
                        <CardClientes key={index} imagem={cliente.imagem}>
                            <h3>{cliente.nome}</h3>
                            <p>{cliente.depoimento}</p>
                        </CardClientes>
                    ))}
                </section>
            </div>
        </div>
    )
}