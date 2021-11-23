import { useContext, useEffect } from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { AuthContext } from '../../contexts/AuthContext';
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
    const { currentUser, handleOpenModal, isModalVisible, fetchMarketTotalizer, username, password } = useContext(AuthContext)
    useEffect(() => {
        try {
            fetchMarketTotalizer(username, password)
        } catch (err) {
            alert(err)
        }
    }, [ username, password])
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
                        <Value>{currentUser?.data[0].Total.current_balance}</Value>
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
                            <LeftTransactionValue>{currentUser?.data[0].Total.withdrawals}</LeftTransactionValue>
                            <LeftTransactionTitle>Retiradas (R$)</LeftTransactionTitle>
                        </TransactionLeft>
                        <TransactionRight>
                            <RightTransactionValue>{currentUser?.data[0].Total.comissions}</RightTransactionValue>
                            <RightTransactionTitle>Comissões (R$)</RightTransactionTitle>
                        </TransactionRight>
                    </TransactionsData>
                    <TransactionsData>
                        <TransactionLeft>
                            <LeftTransactionValue>{currentUser?.data[0].Total.anticipations}</LeftTransactionValue>
                            <LeftTransactionTitle>Antecipações (R$)</LeftTransactionTitle>
                        </TransactionLeft>
                        <TransactionRight>
                            <RightTransactionValue>{currentUser?.data[0].Total.shipping}</RightTransactionValue>
                            <RightTransactionTitle>Frete do marketplace (R$)</RightTransactionTitle>
                        </TransactionRight>
                    </TransactionsData>
                    <TransactionsData>
                        <TransactionLeft>
                            <LeftTransactionValue>{currentUser?.data[0].Total.total}</LeftTransactionValue>
                            <LeftTransactionTitle>Pagamentos totais (R$)</LeftTransactionTitle>
                        </TransactionLeft>
                        <TransactionRight>
                            <RightTransactionValue>{currentUser?.data[0].Total.refundeds}</RightTransactionValue>
                            <RightTransactionTitle>Devoluções e cancelamentos (R$)</RightTransactionTitle>
                        </TransactionRight>
                    </TransactionsData>
                </Container>
            }
        </>
    );
}