import estilos from "./SecaoContatos.module.css";
import Image from "next/image";
import localizacao from "../../../public/local.png"
import telefone from "../../../public/telefone.png"
import email from "../../../public/email.png"
import facebook from "../../../public/fb.png"
import ig from "../../../public/ig.png"
import tt from "../../../public/tt.png"

export default function SecaoContato (){
    return(
        <section className={estilos.secaocontato}>
            <div className={estilos.container_contato}>
                <div className={estilos.sobrenos}>
                    <h3>Fale conosco</h3>
                    <p>Não perca tempo venha conhecer uma de nossas lojas, ou entre em contado através de nossas redes socias ou da central de atendimento.</p>
                </div>
                <div className={estilos.container_cards}>
                    <div className={estilos.container_telefone}>
                        <h3 className={estilos.titulo}>Contatos</h3>
                        <div className={estilos.linha}>
                            <Image src= {localizacao} alt="Localização" width={24} height={24} />
                            <span>Nova Iguaçu, RJ</span>
                        </div>

                        <div className={estilos.linha}>
                            <Image src={telefone} alt="Telefone" width={24} height={24} />
                            <span>(21) 9999-9999</span>
                        </div>
                        <div className={estilos.linha}>
                            <Image src={email} alt="Email" width={24} height={24} />
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>
                    <div className={estilos.container_telefone}>
                        <h3 className={estilos.titulo}>Nossas Redes Sociais</h3>
                        <div className={estilos.linha}>
                            <Image src={facebook} alt="Facebook" width={24} height={24} />
                            <span>Facebook</span>
                        </div>
                        <div className={estilos.linha}>
                            <Image src={ig} alt="Instagram" width={24} height={24} />
                            <span>Instagram</span>
                        </div>
                        <div className={estilos.linha}>
                            <Image src={tt} alt="Twitter" width={24} height={24} />
                            <span>Twitter</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}