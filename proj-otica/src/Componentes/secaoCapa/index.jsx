import estilos from "./SecaoCapa.module.css";

export default function SecaoCapa() {
    return(
        <section className={estilos.secao_capa}>
            <div className={estilos.container_titulo}>
                <p className={estilos.paragrafos}>Preços baixos em</p>
                <h1 className={estilos.titulo}>ÓCULOS DE <br/>GRAU E DE SOL</h1>
                <p className={estilos.paragrafos}>Você só encontra aqui</p>            
            </div>
        </section>
    )
}