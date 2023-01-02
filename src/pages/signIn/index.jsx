import { Container, Form, Background} from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

        <Input 
        placeholder="E-mail" 
        type="text" 
        icon={FiMail} 
        onChange={e => setEmail(e.target.value)}
        />

        <Input 
        placeholder="Senha" 
        type="password" 
        icon={FiLock} 
        onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar"
        onClick={handleSignIn}
        />

        <Link to="/register">
          Criar conta
        </Link>

      </Form>

      <Background/>
    </Container>
  );
}
