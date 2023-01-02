import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/textArea';
import { NoteItem } from '../../components/noteItem';
import { Section } from '../../components/section';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/buttonText'
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Container, Form } from './styles';

export function New(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  function handleAddLink(){
    setLinks( prevState => [...prevState, newLink])
    setNewLink("");
  }

  function handleRemoveLink(linkDeleted){
    setLinks(prevState => prevState.filter(link => link !== linkDeleted));
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(tagDeleted){
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
  }

  async function handleNewNote(){
    if (!title) {
      return alert("Digite o título da nota");
    }
    
    if(newLink){
      return alert("Você deixou um link no campo para adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio ");
    }

    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio ");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText 
            title="Voltar"
            onClick={handleBack}
            />
          </header>

          <Input 
          placeholder="Título"
          onChange={e => setTitle(e.target.value)}
          />
          <TextArea 
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis"/>
          {
            links.map((link, index) => ( 
              <NoteItem 
              key={String(index)}
              value={link}
              onClick={() => handleRemoveLink(link)}
              /> 
            ))
          }
            <NoteItem 
            isNew 
            placeholder="Novo link"
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLink}
            />

            <Section title="Marcadores">
              <div className='tags'>
            {
              tags.map((tag, index) => (
                <NoteItem 
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
                />
              ))
            }

            <NoteItem 
              isNew 
              placeholder="Nova Tag"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
              </div>
            </Section>

            <Button 
            title="Salvar"
            onClick={handleNewNote}
            />
        </Form>
      </main>
    </Container>
  )
}