# My Fisrt Portfolio - Meu Primeiro Portfólio

Esse projeto foi desenvolvido para ajudar devs iniciantes que desejam mostrar alguns de seus projetos porém não possuem viabilidade para construir um portfólio completo ainda. Esse projeto foi feito para uma atividade da faculdade e a interface foi inspirada em um desafio de projeto da plataforma Rocketseat.

## Passo a Passo para ter seu portifólio:

1. Faça um **Fork** deste repositório para o seu Github. Caso não saiba como fazer fork de um repositório siga o tutorial a seguir: [Fork](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

2. **Clone** o repositório que você forkou no seu Github para a sua máquina seguindo o tutorial do link anterior.

3. Após clonar o repositório digite o comando "npm install" em seu terminal para instalar a node_modules. Caso não saiba o que é a node_modules, se desejar leia o tutorial a seguir: [node_modules](https://cursos.alura.com.br/forum/topico-duvida-pasta-node_modules-no-github-348015#:~:text=js%20e%20o%20React.,nas%20informa%C3%A7%C3%B5es%20do%20arquivo%20package.).

4. Após fazer a instalação da node_modules digite o comando "npm run dev" em seu terminal para rodar o projeto em desenvolvimento, clique na url fornecidade no terminal, dessa forma você poderá ver seu projeto enquanto desenvolve.

5. Abra a pasta **"src"**, entre no arquivo **"App.tsx"**, na constante **"user"** troque o nome de usuário de exemplo pelo seu nome de usuário do Github.

6. Abra a pasta **"hooks"**, entre no arquivo **"useGithub.ts"**, no retorno da constante **"filteredRepos"**, dentro do array (os colchetes "[]") substitua os nomes de repositórios do usuário de exemplo pelo nome dos repositórios do seu Github que contém projetos que você gostaria de mostrar. Você pode colocar os nomes de quantos repositórios desejar, porém é recomendado que coloque somente os nomes dos repositórios que contém seus principais e mais relevantes projetos.

7. Abra a pasta **"components"**, abra a pasta **"AboutMe"**, entre no arquivo **"index.tsx"**, escreva sobre você, sua história, objetivos, paixões e o que mais for relevante. Escreva isso dentro das tags **"p"**, as tags **"p"** representam os parágrafos, portanto, coloque quantos parágrafos forem necessários para o seu texto, respeitando a gramática da língua portuguesa, as tags **"p"** presentes no arquivo são somente de exemplo, pode remover as que não são necessárias.

8. Dentro da pasta **"components"**, abra a pasta **"Links"**, entre no arquivo **"index.tsx"**, substitua as informações de exemplo dos links pelas suas informações. Se necessário pode adicionar mais um link, respeitando o tipo estabelecido.

9. Dentro da pasta **"components"**, abra a pasta **"Profile"**, entre no arquivo **"index.tsx"**, substitua o texto da tag "h1" pelo seu nome e sobrenome (ideal utilizar apenas um sobrenome); e o texto da tag "p" pelo sua área de atuação e nível profissional (nível profissional é opcional). Exemplo: <h1>Thaís Silva</h1>, <p>Front-end Developer</p>.

10. Dentro da pasta **"components"**, abra a pasta **"Techs"**, entre no arquivo **"index.tsx"**, substitua os textos no array pelas suas principais tecnologias, lembrando de respeitar a estrutura (texto sempre entre aspas e utilizar vírgula para separar os textos).

11. Faça push das alterações do projeto na sua máquina para o repositório no seu Github. Para isso utilize os seguintes comandos:
```
git add .
git commit -m "Descrição das alterações"
git push origin main  # Ou outra branch, se estiver usando outra
```

12. Publique seu projeto na plataforma **Versel**. Faça login na plataforma com o seu Github e siga o tutorial a seguir: []().


## Observações Finais

1. Tecnologias utilizadas neste projeto: TypeScript, React JS, Styled-Components, Axios.
2. Não modifique nada além do que foi instruído no passo a passo se você não tiver conhecimento nas tecnologias utilizadas neste projeto.
3. Qualquer dúvida abra uma Isssue que irei responder.