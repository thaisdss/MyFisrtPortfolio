import { Container } from "./styles";

type ProjectsProps = {
    user: string
}

export const Projects = ({ user }: ProjectsProps) => {
    return(
        <Container>
            <h2>Meus Projetos</h2>
            <p>
                <a href={`https://github.com/${user}?tab=repositories`} target="_blank">Veja Todos</a>
            </p>
        </Container>
    );
}