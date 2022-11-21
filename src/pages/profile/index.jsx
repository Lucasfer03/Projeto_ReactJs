import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Input} from '../../components/input'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom';


export function Profile(){
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Lucasfer03.png" 
          alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera/>

            <input
              id= "avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input
          placeholder="nome"
          type="text"
          icon={ FiUser }
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={ FiMail }
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={ FiLock }
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={ FiLock }
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}