import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/textArea';
import { NoteItem } from '../../components/noteItem';
import { Section } from '../../components/section';
import { Button } from '../../components/button';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

export function New(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título"/>
          <TextArea placeholder="Observações"/>

          <Section title="Links úteis"/>
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isNew placeholder="Novo link"/>

            <Section title="Marcadores">
              <div className='tags'>
            <NoteItem value="React"/>
            <NoteItem isNew placeholder="Nova Tag"/>
              </div>
            </Section>

            <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}