import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { ButtonText } from "../../components/buttonText";
import { Section } from "../../components/section"
import { Note } from "../../components/note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{ 
            title: 'React', 
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'rocketseat'},
            ]
            }}/>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
