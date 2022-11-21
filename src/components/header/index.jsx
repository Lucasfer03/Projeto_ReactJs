import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Lucasfer03.png" alt="Foto do usuário " />
        <div>
          <span>Bem-vindo</span>
          <strong>Lucas Fernandes</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
