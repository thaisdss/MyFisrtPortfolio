import { useGithub } from "./hooks/useGithub";
import { Container } from "./App.styled";
import { Profile } from "./components/Profile";
import { Links } from "./components/Links";
import { Techs } from "./components/Techs";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Project } from "./components/Project";

export const App = () => {
  // Substitua o nome de exemplo pelo seu nome de usuário no Github.
  const user = "octocat"
  const {avatarUrl, repos} = useGithub(user);

  return (
    <Container>
      <div>
          <Profile url={avatarUrl} />
          <Links />
          <Techs />
      </div>
      <div>
          <AboutMe />
          <Projects user={user} />
          { repos.map((repo, index) => (
            <Project
            key={repo.name}
            dataRepo={repo}
            index={index+1}
            />
          )) }
      </div>
    </Container>
  )
}
