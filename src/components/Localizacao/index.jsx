import styles from './Localizacao.module.scss'

export default function Localizacao(){
    return (
        <div className={styles.localizacao}>
            <h1>ONDE ESTAMOS <strong>LOCALIZADOS?</strong></h1>
            <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1166797096143!2d-43.360893!3d-22.982736499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-003!5e0!3m2!1spt-BR!2sbr!4v1719434522026!5m2!1spt-BR!2sbr" width="100%" height={450} style={{border: 0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}