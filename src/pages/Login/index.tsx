
import { FormEvent,  useContext } from 'react';
import {  useNavigate } from "react-router-dom";
import { Loading } from '../../components/Loading';
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
  const {fetchCurrentUser, username, password, setUsername, setPassword, isLoading, setIsLoading} = useContext(AuthContext)

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true)
    try{
      const user = await fetchCurrentUser(username, password);
      
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      navigate('Dashboard')
    } catch(err: any){
      alert(err.message);
    } finally {
      setIsLoading(false)
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
          {isLoading ? <Loading/> : <FormButton type="submit">Acessar o Sistema</FormButton>}
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


