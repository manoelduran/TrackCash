
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LeftCard } from "../../components/LeftCard";
import { RightCard } from "../../components/RightCard";
import { AuthContext } from "../../contexts/AuthContext";

import {
    Container,
    CardDiv,
    FooterDiv,
} from './styles';

export function Dashboard() {
    const navigate = useNavigate();
    const {currentUser} = useContext(AuthContext);
    useEffect(() => {
        if(!currentUser){
          navigate('/');
        }
      }, [navigate, currentUser]);
    return (
        <Container>
            <Header  />
            <CardDiv>
                <LeftCard />
                <RightCard />
            </CardDiv>
            <FooterDiv>
                <Footer />
            </FooterDiv>
        </Container>
    );
}