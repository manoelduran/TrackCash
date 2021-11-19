import {
Container,
Copyright,
LinksDiv,
Term,
Privacity,
FAQ,
} from './styles';

export function Footer(){
    return (
        <Container>
            <Copyright>Copyright © 2017 - 2021 TrackCash. Todos os Direitos Reservados.</Copyright>
            <LinksDiv>
            <Term href="/">Termo de uso</Term>
            <Privacity href="/">Políticas de privacidade</Privacity>
            <FAQ href="/">FAQ</FAQ>
            </LinksDiv>
        </Container>
    );
}