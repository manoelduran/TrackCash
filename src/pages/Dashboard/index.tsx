import { Footer } from "../../components/Footer";
import {  Header } from "../../components/Header";
import {
Container,
CardDiv,
Text,
} from './styles';

export function Dashboard(){
    return (
        <Container>
            <Header/>
            <CardDiv>
                        <Text>ola</Text>
                        <Text>bola</Text>
            </CardDiv>
            <Footer/>
        </Container>
    );
}