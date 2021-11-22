import { useContext } from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { CompanyContext } from '../../contexts/CompanyContext';
import { Modal } from '../Modal';

import {
    Container,
    Header,
    HeaderTitle,
    CardDiv,
    Icon,
    Value,
    Span,
    ModalsDiv,
    ModalDivLeft,
    IconLeft,
    LeftValueDiv,
    LeftValue,
    ButtonIconLeft,
    ModalDivRight,
    IconRight,
    RightValueDiv,
    RightValue,
    ButtonIconRight,
    BreakLine,
    TransactionsData,
    TransactionLeft,
    LeftTransactionValue,
    LeftTransactionTitle,
    TransactionRight,
    RightTransactionValue,
    RightTransactionTitle,
} from './styles';

export function RightCard() {
    const {  handleOpenModal, isModalVisible } = useContext(CompanyContext)
    return (
        <>
            {isModalVisible ? <Modal />
                :
                <Container>
                    <Header>
                        <HeaderTitle>Desempenho Mensal e Diário</HeaderTitle>
                    </Header>
                    <CardDiv>
                        <Icon src="dollar.png" />
                        <Value>7,48%</Value>
                        <Span>Total líquido (R$)</Span>
                    </CardDiv>
                    <ModalsDiv>
                        <ModalDivLeft>
                            <IconLeft src="leroy.png" alt="Leroy" />
                            <LeftValueDiv>
                                <LeftValue>9.370,73</LeftValue>
                                <ButtonIconLeft onClick={handleOpenModal}>
                                    <AiFillPlusSquare size={13} />
                                </ButtonIconLeft>
                            </LeftValueDiv>
                        </ModalDivLeft>
                        <ModalDivRight>
                            <IconRight src="madeira.png" alt="Madeira Madeira" />
                            <RightValueDiv>
                                <RightValue>2.160,60</RightValue>
                                <ButtonIconRight onClick={handleOpenModal}>
                                    <AiFillPlusSquare size={13} />
                                </ButtonIconRight>
                            </RightValueDiv>
                        </ModalDivRight>
                    </ModalsDiv>
                    <BreakLine />
                    <TransactionsData>
                        <TransactionLeft>
                            <LeftTransactionValue>225,20</LeftTransactionValue>
                            <LeftTransactionTitle>Retiradas (R$)</LeftTransactionTitle>
                        </TransactionLeft>
                        <TransactionRight>
                            <RightTransactionValue>982,01</RightTransactionValue>
                            <RightTransactionTitle>Comissões (R$)</RightTransactionTitle>
                        </TransactionRight>
                    </TransactionsData>
                    <TransactionsData>
                        <TransactionLeft>
                            <LeftTransactionValue>685,20</LeftTransactionValue>
                            <LeftTransactionTitle>Antecipações (R$)</LeftTransactionTitle>
                        </TransactionLeft>
                        <TransactionRight>
                            <RightTransactionValue>988,00</RightTransactionValue>
                            <RightTransactionTitle>Frete do marketplace (R$)</RightTransactionTitle>
                        </TransactionRight>
                    </TransactionsData>
                    <TransactionsData>
                        <TransactionLeft>
                            <LeftTransactionValue>208,38</LeftTransactionValue>
                            <LeftTransactionTitle>Pagamentos totais (R$)</LeftTransactionTitle>
                        </TransactionLeft>
                        <TransactionRight>
                            <RightTransactionValue>540,41</RightTransactionValue>
                            <RightTransactionTitle>Devoluções e cancelamentos (R$)</RightTransactionTitle>
                        </TransactionRight>
                    </TransactionsData>
                </Container>
            }
        </>
    );
}