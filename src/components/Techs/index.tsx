import { Container } from "./style"

export const Techs = () => {
    // Substitua os items do array pelas suas principais tecnologias. Obs: Somente as principais.
    const techs = ["ReactJS", "TypeScript", "JavaScript", "HTML", "CSS", "Git", "GitHub", "Next.js"]

    return(
        <Container>
            <h2>Tecnologias</h2>
            <div>
                {techs.map(tech => (
                    <p key={tech}>{tech}</p>
                ))}
            </div>
        </Container>
    );
}
