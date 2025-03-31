import { Link } from "../../types/Link"
import { Container  } from "./style"

export const Links = () => {
    // Substitua as informações abaixo pelas de suas redes sociais e contato.
    // title: O nome que aparecerá na tela.
    // src: o nome da imagem que deverá ser pega do public/assets - NÃO SUBSTITUIR ISSO.
    // alt: O texto que aparecerá ao passar o mouse sobre a imagem.
    // link: O link que o botão irá levar.
    const links: Link[] = [
        {
            title: "octocat",
            src: "github",
            alt: "Ícone do GitHub",
            link: "https://github.com/ocatocat",
        },
        {
            title: "github",
            src: "linkedin",
            alt: "Ícone do Linkedin",
            link: "https://www.linkedin.com/company/github/",
        },
        {
            title: "github",
            src: "instagram",
            alt: "Ícone do Instagram",
            link: "https://www.instagram.com/github/",
        },
        {
            title: "support@github.com",
            src: "mail",
            alt: "Ícone do E-mail",
            link: "mailto:support@github.com",
        },
    ]

    return(
        <Container>
           <ul>
                <li>
                    <img src="assets/map-pin.svg" alt="Ícone de Mapa" />
                    <p>Brazil</p>
                </li>
                
                {links.map(link => (
                    <li key={link.link}>
                        <img src={`assets/${link.src}.svg`} alt={link.alt} />
                        <p><a href={link.link} target="_blank">{link.title}</a></p>
                    </li>
                ))}
           </ul>
        </Container>
    );
}
