import styles from './Apresentacao.module.scss'

import ItemLista from '../ItemLista'

export default function Apresentacao(){
    const itensLista = ['Pré-avaliação', 'Aparelhos Dentários', 'Raio-X digital', 'Clareamento dental']

    return (
        <div className={styles.apresentacao}>
            <section className={`limitedWidth ${styles['limitedWidth']}`}>
                <h1>OS MELHORES <strong>APARELHOS DENTÁRIOS!</strong></h1>
                <p className={styles.paragrafoPrincipal}>Confira abaixo todas as especialidades odontológicas que temos à sua disposição!</p>

                <ul>
                    {itensLista.map((item) => (
                        <ItemLista key={item} item={item}/>
                    ))}
                </ul>
            </section>
        </div>
    )
}