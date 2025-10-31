import Image from "next/image";
import estilos from "./SecaoProdutos.module.css";
import imagem1 from "../../../public/oculos01.png";
import imagem2 from "../../../public/oculos02.png";
import imagem3 from "../../../public/oculos03.png";
import imagem4 from "../../../public/oculos04.png";


export default function SecaoProdutos () {
    return (
        <section className={estilos.secao_produtos}>
            <div className={estilos.conteudo_produto}>
                <div className="container_titulo">
                    <h3>Nossos Produtos</h3>
                    <p>Trabalhamos com óculoes de grau,óculos de sol,lentes transition no modelo masculino,feminino e infantil.</p>
                    <p>Todos os nossos preços sao acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>
                <div className="container_cards">
                    <div className="card">
                        <h4>óculos de Grau</h4>
                        <Image src={imagem1} alt="Óculos de Grau"/>
                        <p>R$500,00</p>
                    </div>
                    <div className={estilos.card}>
                        <h4>Óculs de Sol</h4>
                        <Image src={imagem2} alt="Óculos de Sol"/>
                        <p>R$750,00</p>
                    </div>
                    <div className={estilos.card}>
                        <h4>Óculos transition</h4>
                        <Image src={imagem3} alt="Óculos transition"/>
                        <p>R$700,00</p>
                    </div>
                    <div className={estilos.card}>
                        <h4>Óculos Infantil</h4>
                        <Image src={imagem4} alt="Óculos Infantil"/>
                        <p>R$500,00</p>
                    </div>
                </div>
                <div className="container_lista">
                    <h3>Todos os nossos produtos incluem:</h3>
                    <ul className={estilos.lista}>
                        <li>Garantia de 1 ano</li>
                        <li>Manutencao preventiva</li>
                        <li>Descontos especias na compra do segundo produto</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}