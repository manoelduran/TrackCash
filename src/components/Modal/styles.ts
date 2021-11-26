import styled from "styled-components";

export const Container = styled.div`
margin-left: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
position: relative;
width: 642px;
height: 236px;
border-radius: 8px;
background: ${({ theme }) => theme.background};
`;
export const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
position: static;
width: 582px;
height: 24px;
margin-left: 30px;
top: calc(50% - 24px/2 - 76px);
`;
export const TitleDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: static;
width: 202px;
height: 24px;
`;
export const Icon = styled.img`
width: 24px;
height: 24px;
background: ${({ theme }) => theme.white};
`;
export const Title = styled.h1`
margin-left: 8px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
color: ${({ theme }) => theme.dark};
`;
export const Button = styled.button`
width: 12px;
height: 12px;
border: none;
cursor: pointer;
background: ${({ theme }) => theme.background};
`;
export const Rectangles = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
position: static;
width: 582px;
height: 120px;
margin-left: 30px;
margin-top: 36px;
`;
export const FirstRectangle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 12px;
position: static;
width: 582px;
height: 40px;
border-radius: 8px 8px 0px 0px;
background: ${({ theme }) => theme.blueDark};
`;
export const NameTag = styled.div`
color: ${({ theme }) => theme.white};
display: flex;
align-items: center;
text-align: center;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
`;
export const ValueTag = styled.div`
color: ${({ theme }) => theme.white};
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
`;
export const SecondRectangle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 12px;
position: static;
width: 582px;
height: 40px;
background: ${({ theme }) => theme.white};
`;
export const Date = styled.span`
color: ${({ theme }) => theme.dark};
display: flex;
align-items: center;
text-align: center;
font-family: Ubuntu;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
`;
export const Value = styled.span`
color: ${({ theme }) => theme.green};
font-family: Ubuntu;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
`;
export const ThirdRectangle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 12px;
position: static;
width: 582px;
height: 40px;
border-radius: 0px 0px 8px 8px ;
background: ${({ theme }) => theme.greenDark};
`;
export const Total = styled.div`
color: ${({ theme }) => theme.white};
display: flex;
align-items: center;
text-align: center;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
 `;
export const TotalValue = styled.div`
color: ${({ theme }) => theme.white};
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
 `;

