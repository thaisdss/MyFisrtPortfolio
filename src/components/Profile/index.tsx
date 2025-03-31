import { Container } from "./style"

type Props = {
    url: string
}

export const Profile = ({ url }: Props) => {
    return(
        // No h1 subtitua o exemplo pelo seu nome e sobrenome (ideal somente um sobrenome).
        // no p substitua o exemplo pela sua função (Front-End Developer, Back-End Developer, Devops, etc).
        // Também pode colocar seu nível ao lado (Junior, Pleno, Senior). Exemplo: Front-End Developer - JR
        <Container>
            <img src={url} alt="Foto de Perfil" />
            <div>
                <h1>Octocat</h1>
                <p>Plataforma de Hospedagem</p>
            </div>
        </Container>
    );
}