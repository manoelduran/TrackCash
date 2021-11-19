import { Footer } from "../../components/Footer";
import {  Header } from "../../components/Header";
import { LeftCard } from "../../components/LeftCard";
import { RightCard } from "../../components/RightCard";
import {
Container,
CardDiv,
FooterDiv,
} from './styles';

export function Dashboard(){
    return (
        <Container>
            <Header/>
            <CardDiv>
                        <LeftCard/>
                        <RightCard/>
            </CardDiv>
            <FooterDiv>
            <Footer/>
            </FooterDiv>
        </Container>
    );
}