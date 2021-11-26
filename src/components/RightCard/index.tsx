/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
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

interface RightCardProps {
    payments_total: string;
    name1: string;
    value1: string;
    name2: string;
    value2: string;
    withdrawals: string;
    comissions: string;
    anticipations: string;
    shipping: string;
    total: string;
    refundeds: string;
}

export function RightCard({ name2,
    value2,
    name1,
    value1,
    anticipations,
    comissions,
    refundeds,
    shipping,
    total,
    payments_total,
    withdrawals }: RightCardProps) {
    const { handleOpenModal,
        isModalVisible,
        date_start,
        date_end,
    } = useContext(AuthContext);

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
                        <Value>{payments_total}</Value>
                        <Span>Total líquido (R$)</Span>
                    </CardDiv>
                    <ModalsDiv>
                        <ModalDivLeft>
                            <IconLeft src="carrefour.svg" alt={name1} />
                            <LeftValueDiv>
                                <LeftValue>{value1}</LeftValue>
                                <ButtonIconLeft onClick={() => handleOpenModal(name1)}>
                                    <AiFillPlusSquare size={13} />
                                </ButtonIconLeft>
                            </LeftValueDiv>
                        </ModalDivLeft>
                        <ModalDivRight>
                            <IconRight src="kabum.png" alt={name2} />
                            <RightValueDiv>
                                <RightValue>{value2}</RightValue>
                                <ButtonIconRight onClick={() => handleOpenModal(name2)}>
                                    <AiFillPlusSquare size={13} />
                                </ButtonIconRight>
                            </RightValueDiv>
                        </ModalDivRight>
                    </ModalsDiv>
                    <BreakLine />
                    <TransactionsData>
                        <TransactionLeft>
                            <LeftTransactionValue>{withdrawals}</LeftTransactionValue>
                            <LeftTransactionTitle>Retiradas (R$)</LeftTransactionTitle>
                        </TransactionLeft>
                        <TransactionRight>
                            <RightTransactionValue>{comissions}</RightTransactionValue>
                            <RightTransactionTitle>Comissões (R$)</RightTransactionTitle>
                        </TransactionRight>
                    </TransactionsData>
                    <TransactionsData>
                        <TransactionLeft>
                            <LeftTransactionValue>{anticipations}</LeftTransactionValue>
                            <LeftTransactionTitle>Antecipações (R$)</LeftTransactionTitle>
                        </TransactionLeft>
                        <TransactionRight>
                            <RightTransactionValue>{shipping}</RightTransactionValue>
                            <RightTransactionTitle>Frete do marketplace (R$)</RightTransactionTitle>
                        </TransactionRight>
                    </TransactionsData>
                    <TransactionsData>
                        <TransactionLeft>
                            <LeftTransactionValue>{total}</LeftTransactionValue>
                            <LeftTransactionTitle>Pagamentos totais (R$)</LeftTransactionTitle>
                        </TransactionLeft>
                        <TransactionRight>
                            <RightTransactionValue>{refundeds}</RightTransactionValue>
                            <RightTransactionTitle>Devoluções e cancelamentos (R$)</RightTransactionTitle>
                        </TransactionRight>
                    </TransactionsData>
                </Container>
            }
        </>
    );
}