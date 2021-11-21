import MultiAxisLine from '../MultiAxisLine';
import {
    Container,
    Header,
    HeaderTitle,
    GraphicDiv,
    LegendDiv,
    Text,
    LeftLegend,
    LeftColor,
    LeftText,
    RightLegend,
    RightColor,
    RightText,
    TaxDiv,
    TaxLeft,
    IconLeft,
    TaxValueLeft,
    TaxSpanLeft,
    TaxRight,
    IconRight,
    TaxValueRight,
    TaxSpanRight,
    BreakLine,
    SecondDiv,
    Left,
    ValueLeft,
    SpanLeft,
    Right,
    ValueRight,
    SpanRight,
} from './styles';

export function LeftCard() {
    return (
        <Container>
            <Header>
                <HeaderTitle>Desempenho Mensal e Diário</HeaderTitle>
            </Header>
            <GraphicDiv>
                <MultiAxisLine/>
                <LegendDiv>
                    <LeftLegend>
                        <LeftColor />
                        <LeftText>Número de vendas</LeftText>
                    </LeftLegend>
                    <RightLegend>
                        <RightColor />
                        <RightText>Valor de Vendas (R$)</RightText>
                    </RightLegend>
                </LegendDiv>
            </GraphicDiv>
            <TaxDiv>
                <TaxLeft>
                    <IconLeft  src="/list.png"/>
                    <TaxValueLeft>7,48%</TaxValueLeft>
                    <TaxSpanLeft>Taxa de aprovação dos pedidos</TaxSpanLeft>
                </TaxLeft>
                <TaxRight>
                    <IconRight src="dollar.png"/>
                    <TaxValueRight>7,48%</TaxValueRight>
                    <TaxSpanRight>Taxa de aprovação dos pedidos</TaxSpanRight>
                </TaxRight>
            </TaxDiv>
            <BreakLine/>
            <SecondDiv>
            <Left>
                    <IconLeft  src="/list.png"/>
                    <ValueLeft>98</ValueLeft>
                    <SpanLeft>Pedidos aprovados na data de hoje</SpanLeft>
                </Left>
                <Right>
                    <IconRight src="dollar.png"/>
                    <ValueRight>7,78%</ValueRight>
                    <SpanRight>Total de vendas do dia (R$)</SpanRight>
                </Right>
            </SecondDiv>
        </Container>
    );
}