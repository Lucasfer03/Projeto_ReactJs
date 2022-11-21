import { Container, Links, Content } from "./styles";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            fugiat fugit impedit nihil veritatis molestiae facilis hic nisi,
            vel, magni, commodi obcaecati quia accusantium dolore amet voluptas
            laudantium perspiciatis sunt!
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.instagram.com/lukassfer_/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
