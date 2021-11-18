import { FormEvent,  useContext,  useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import {
  Container,
  LoginContainer,
  Logo,
  Title,
  Form,
  EmailInput,
  PasswordInput,
  FormButton,
  Footer,
  Remember,
  ExtraDiv,
  Recovery,
  Register,
  TextContainer,
  TextTitle,
  Text,
  DivContent,
  RememberDiv,
  RememberSpan
} from './styles';

export function Login() {
  const navigate = useNavigate();
  const {fetchCurrentUser} = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    try{
      await fetchCurrentUser(username, password)
      console.log(username, password)
      navigate('/Dashboard');
    } catch(err){
      alert('Usuário não encontrado!')
    }
  }

  return (
    <Container >
      <LoginContainer >
        <Logo src="/logo.svg" alt="Logo"  />
        <Title >Fazer login no TrackCash:</Title>
        <Form onSubmit={onSubmit}>
          <EmailInput  placeholder="Digite seu Email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
          <PasswordInput  placeholder="Digite sua Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormButton type="submit">Acessar o Sistema</FormButton>
        </Form>
        <Footer>
          <RememberDiv>
          <Remember type={'checkbox'} />
          <RememberSpan>Lembre-me</RememberSpan>
          </RememberDiv>
          <ExtraDiv>
            <Recovery>Recuperar Senha</Recovery>
            <Register>Cadastre-se</Register>
          </ExtraDiv>
        </Footer>
      </LoginContainer>
      <TextContainer>
        <DivContent>
        <TextTitle>Muito mais que um<br />conciliador financeiro!</TextTitle>
        <Text>A melhor ferramenta no mercado e a única<br /> com processo automatizado, que compara as<br /> informações entre Plataformas,<br /> MarketPlaces, Transportadoras, Meios de<br /> Pagamento e Instituições Financeiras!</Text>
        </DivContent>
      </TextContainer>
    </Container>
  );
}


