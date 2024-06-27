import styles from './Beneficios.module.scss'

import Image from 'next/image'
import Dentes from '/public/dentes.jpg'

export default function Beneficios(){
    return(
        <div className={styles.beneficios}>
            <div className={`limitedWidth ${styles['limitedWidth']}`}>
                
                <h1>POR QUE USAR <strong>APARELHO?</strong></h1>

                <Image src={Dentes}/>

                <ul>
                    <li>
                        <h2>Alinhar os dentes</h2>
                        <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
                    </li>
                    <li>
                        <h2>Melhorar a diccção e a higiene dentária</h2>
                        <p>Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
                    </li>
                    <li>
                        <h2>Corrigir espaço entre os dentes</h2>
                        <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficiente para que esses problemas possam ser corrigidos.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}