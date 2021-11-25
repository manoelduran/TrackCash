/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AuthContext } from '../../contexts/AuthContext';
import { Loading } from '../Loading';

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
    const {
        handleCloseModal,
        isLoading,
        setIsLoading,
        fetchTransferences,
        transferences,
        channel
    } = useContext(AuthContext);
    useEffect(() => {
        setIsLoading(true)
        try {
            fetchTransferences();
        } catch (err) {
            alert(err)
        }
        finally {
            setIsLoading(false)
        }
    }, []);
    return (
        <Container>
            <Header>
                <TitleDiv>
                    <Icon src="/carrefour.svg" />
                    <Title>Repasses da {channel}</Title>
                </TitleDiv>
                <Button onClick={handleCloseModal}>
                    <AiOutlineClose />
                </Button>
            </Header>
            <Rectangles>
                <FirstRectangle>
                    <NameTag>Data</NameTag>
                    <ValueTag>Valor (R$)</ValueTag>
                </FirstRectangle>
                {isLoading ? <Loading /> :
                    <>
                        {transferences && Object.keys(transferences).filter(x => x !== "transfer_total").map((channel: string) => (
                            <SecondRectangle>
                                <Date>{transferences[channel].transfer_date}</Date>
                                <Value>{transferences[channel].transfer_amount}</Value>
                            </SecondRectangle>
                        ))}
                    </>
                }
                <ThirdRectangle>
                    <Total>Saldo Final</Total>
                    <TotalValue>{transferences?.transfer_total}</TotalValue>
                </ThirdRectangle>
            </Rectangles>
        </Container>
    );
}