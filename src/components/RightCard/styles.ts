import styled from "styled-components";

export const Container = styled.div`
margin-left: 30px;
width: 634px;
height: 820.69px;
background: ${({theme}) => theme.white};
filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.3));
border-radius: 8px;
`;

export const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 0px;
position: static;
width: 634px;
height: 48px;
left: 0px;
top: 0px;
background: ${({theme}) => theme.dark};
border-radius: 8px 8px 0px 0px;
`;
export const HeaderTitle = styled.div`
text-align: center;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 16px;
color: ${({theme}) => theme.white};
`;

export const CardDiv = styled.div`
margin-top: 50px;
margin-left: 167px;
width: 300px;
height: 160px;
border-radius: 12px;
background: ${({theme}) => theme.green};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px 50px;
`;
export const Icon = styled.img`
text-align: center;
width: 32px;
height: 32px;
`;
export const Value = styled.h1`
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 39px;
margin-top: 20px;
text-align: center;
color: ${({theme}) => theme.white};
`;
export const Span = styled.span`
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
margin-top: 12px;
text-align: center;
color: ${({theme}) => theme.white};
`;


export const ModalsDiv = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
position: static;
width: 306px;
height: 24px;
margin-left: 164px;
margin-top: 60px;
`;
export const ModalDivLeft = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: static;
width: 123px;
height: 24px;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
border-radius: 8px;
background: ${({theme}) => theme.white};
`;

export const IconLeft = styled.img`
width: 24px;
height: 24px;
border-radius: 4px 0px 0px 4px;
background: ${({theme}) => theme.white};
`;

export const LeftValueDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 8px;
width: 99px;
height: 24px;
border-radius: 0px 4px 4px 0px;
background: ${({theme}) => theme.blueLight};
`;
export const LeftValue = styled.span`
text-align: center;
margin-left: 8px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
color: ${({theme}) => theme.dark};
`;
export const ButtonIconLeft = styled.button`
margin-left: 13px;
border: none;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

export const ModalDivRight = styled.div`
margin-left: 60px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: static;
width: 123px;
height: 24px;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
border-radius: 8px;
background: ${({theme}) => theme.white};
`;
export const IconRight = styled.img`
width: 24px;
height: 24px;
border-radius: 4px 0px 0px 4px;
background: ${({theme}) => theme.white};
`;
export const RightValueDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 8px;
width: 99px;
height: 24px;
border-radius: 0px 4px 4px 0px;
background: ${({theme}) => theme.blueLight};
`;
export const RightValue = styled.span`
text-align: center;
margin-left: 8px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
color: ${({theme}) => theme.dark};
`;
export const ButtonIconRight = styled.button`
margin-left: 13px;
border: none;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

export const BreakLine = styled.div`
margin-left: 24px;
margin-top: 60px;
position: static;
width: 586px;
height: 1px;
background: ${({theme}) => theme.breakLine};
`;

export const TransactionsData = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: static;
width: 586px;
height: 55px;
margin-left: 24px;
margin-top: 60px;
`;
export const TransactionLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
position: static;
width: 105px;
height: 55px;
`;
export const LeftTransactionValue = styled.h1`
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 39px;
color: ${({theme}) => theme.green};
`;
export const LeftTransactionTitle = styled.span`
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-align: left;
width: 223px;
height: 16px;
`;

export const TransactionRight = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
position: static;
width: 191px;
height: 55px;
`;
export const RightTransactionValue = styled.h1`
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 39px;
color: ${({theme}) => theme.orange};
`;
export const RightTransactionTitle = styled.span`
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-align: right;
width: 223px;
height: 16px;
color: ${({theme}) => theme.dark};
`;