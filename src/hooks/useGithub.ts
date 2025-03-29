import { api } from "../services/api";
import { useState } from "react";
import { UserRepo } from "../types/UserRepo";

export const useGithub = (user: string) => {
    const [avatarUrl, setAvatarUrl] = useState<string>("");
    const [repos, setRepos] = useState<UserRepo[]>([]);

    const data = async () => {
        try{
            const [userData, userRepos] = await Promise.all([
                api.get(user),
                api.get(`${user}/repos`)
            ]);
    
            setAvatarUrl(userData.data.avatar_url)
    
            const filteredRepos = userRepos.data
            .filter((repo: UserRepo) => {
            // Substitua os items do array pelo nome dos repositórios dos projetos que você deseja mostrar
            // O número de repositórios vai da sua escolha, o número escolhido abaixo é um exemplo.
            // Apesar de ser da sua escolha, o ideal é que você coloque somente seus principais projetos.
            return ["Hello-World", "linguist", "Spoon-Knife", "git-consortium"].includes(repo.name);
            })
    
            setRepos(filteredRepos);
        }
        catch(error) { console.log(error) }
    }

    data();

    return {avatarUrl, repos};
}