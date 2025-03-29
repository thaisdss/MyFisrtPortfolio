import { Container } from "./style";

export const AboutMe = () => {
    return(
        // Cada paragráfo representa uma informação sobre você.
        // use quantos quiser, os que estão abaixo são apenas de exemplo.
        <Container>
            <h2>Sobre mim</h2>
            <div>
                <p>Entrei em TI por que...</p>
                <p>Meu objetivo é...</p>
                <p>Atualmente estou...</p>
                <p>Estou procurando...</p>
                <p>Posso agregar...</p>
            </div>
        </Container>
    );
}
