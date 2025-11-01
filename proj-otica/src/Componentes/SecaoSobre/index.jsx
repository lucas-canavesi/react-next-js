import Image from "next/image";
import estilos from "./SecaoSobre.module.css";
import atendimento from "../../../public/atendimento.png";
import loja from "../../../public/loja.png";

export default function SecaoSobre () {
    return (
        <section className={estilos.SecaoSobre}>
            <div className={estilos.container_sobrenos}>
                <h3>QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2021, em Nova Iguaçu - Rio de Janeiro, a Ótica vida iniciou suas atividades focada no atendimento ao público de renda mais</p>
                <p>baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>
            <div className={estilos.container_imagens}>
                <div className={estilos.card}>
                    <Image className={estilos.imagem_card} src={atendimento} alt="Atendimento" width={400} height={250}/>
                    <div className={estilos.card_sec}>
                        <h4>NOSSAS FILIAIS</h4>
                        <p>Hoje temos mais de 20 filias pelo Brasil e na América</p>
                    </div>
                </div>
                <div className={estilos.card}>
                    <div className={estilos.card_sec}>
                        <h4>ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                    <Image className={estilos.imagem_card} src={loja} alt="Atendimento" width={400} height={250}/>
                </div>
            </div>
        </section>
    )
}