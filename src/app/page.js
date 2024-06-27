import Header from "@/components/Header";
import styles from "./page.module.css";
import Apresentacao from "@/components/Apresentacao";
import Beneficios from "@/components/Beneficios";
import Depoimentos from "@/components/Depoimentos";
import Informacoes from "@/components/Informacoes";
import Localizacao from "@/components/Localizacao";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>

      <Apresentacao/>

      <Beneficios/>

      <Depoimentos/>

      <Informacoes/>

      <Localizacao/>

      <Rodape/>
    </main>
  );
}
