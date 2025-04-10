import { UserRepo } from "../../types/UserRepo"
import { Container } from "./styles"

type Props = {
    dataRepo: UserRepo
    index: number
}

export const Project = ({ dataRepo, index }: Props) => {
    const redirectPage = () => {
        window.open(dataRepo.html_url, "_blank")
    }

    return(
        <Container className={`project${index}`} onClick={redirectPage}>
            <div className="title">
                <img src="assets/folder.svg" alt="Imagem de Folder" />
                <p>{dataRepo.name}</p>
            </div>

            <p>{dataRepo.description}</p>

            <div className="details">
                <div>
                    <img src="assets/star.svg" alt="Imagem de Estrela" />
                    <p className="star">{dataRepo.stargazers_count}</p>

                    <img src="assets/git-branch.svg" alt="Imagem de Branch" />
                    <p>{dataRepo.forks_count}</p>
                </div>

                {dataRepo.language && (      
                    <div>
                        <img src="assets/code.svg" alt="Imagem de Código" />
                        <p>{dataRepo.language}</p>
                    </div>
                )}
            </div>
        </Container>
    );
}
