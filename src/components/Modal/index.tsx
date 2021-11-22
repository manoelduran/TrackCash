import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CompanyContext } from '../../contexts/CompanyContext';
import {
    Container,
    Header,
    TitleDiv,
    Icon,
    Title,
    Button,
    Rectangles,
    FirstRectangle,
    SecondRectangle,
    ThirdRectangle,
    NameTag,
    ValueTag,
    Date,
    Value,
    Total,
    TotalValue,
} from './styles';

export function Modal() {
    const {handleCloseModal} = useContext(CompanyContext)
    return (
        <Container>
            <Header>
                <TitleDiv>
                <Icon src="/leroy.png" />
                <Title>Repasses da Leroy Merlin</Title>
                </TitleDiv>
                <Button onClick={handleCloseModal}>
                <AiOutlineClose/>
                </Button>
            </Header>
            <Rectangles>
                <FirstRectangle>
                    <NameTag>Data</NameTag>
                    <ValueTag>Valor (R$)</ValueTag>
                </FirstRectangle>
                <SecondRectangle>
                    <Date>05/08/2021</Date>
                    <Value>9.370,73</Value>
                </SecondRectangle>
                <ThirdRectangle>
                    <Total>Saldo Final</Total>
                    <TotalValue>9.370,73</TotalValue>
                </ThirdRectangle>
            </Rectangles>
        </Container>
    );
}