import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import {
    Container,
    Logo,
    User,
    OrangeContainer,
    TextContainer,
    Title,
    Text,
    ButtonCalendar,
    CalendarIcon,
    Button
} from './styles';


export function Header() {
    const navigate = useNavigate();
    const { clearCurrentUser, handleOpenCalendar } = useContext(AuthContext);
    function handleLogout() {
        clearCurrentUser();
        navigate('/');
    }
    return (
        <>
            <Container>
                <Logo src="/logo.svg" alt="Logo" />
                <Button onClick={handleLogout}>
                    <User src="/user.png" alt="User Profile" />
                </Button>
            </Container>
            <OrangeContainer>
                <TextContainer>
                    <Title>Tabela de Recorrências de Pagamentos</Title>
                    <Text>Página de Recorrências de pagamentos referentes ao mês atual</Text>
                </TextContainer>
                <ButtonCalendar onClick={() => handleOpenCalendar()}>
                    <CalendarIcon src="/calendar.png" alt="Calendar" />
                    Seleciona a data
                </ButtonCalendar>
            </OrangeContainer>
        </>
    );
}