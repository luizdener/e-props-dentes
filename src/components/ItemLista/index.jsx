import styles from './ItemLista.module.scss'

import { FaTooth } from "react-icons/fa";

export default function ItemLista({item}){
    return(
        <li className={styles.itemLista}>
            <p><FaTooth/> {item}</p>
        </li>
    )
}