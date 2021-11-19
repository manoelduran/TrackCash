import {Container, Logo, User, OrangeContainer, TextContainer, Title, Text, ButtonCalendar, Calendar} from  './styles';

export function Header(){
    return (
        <>
        <Container>
            <Logo src="/logo.svg" alt="Logo"  />
            <User src="/user.png" alt="User Profile"  />
        </Container>
        <OrangeContainer>
            <TextContainer>
                <Title>Tabela de Recorrências de Pagamentos</Title>
                <Text>Página de Recorrências de pagamentos referentes ao mês atual</Text>
            </TextContainer>
            <ButtonCalendar>
            <Calendar src="/calendar.png" alt="Calendar"  />
                Agosto 2021
                </ButtonCalendar>
        </OrangeContainer>
        </>
    );
}