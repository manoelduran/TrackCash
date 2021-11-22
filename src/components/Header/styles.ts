import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 64px;
background: ${({theme}) => theme.dark};
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Logo = styled.img`
height: 30px;
margin-left: 34px;
border: none;
`;
export const Button = styled.button`
width: 26px;
height: 26px;
margin-right: 34px;
border-radius: 50%;
border: none;
background: ${({theme}) => theme.white};
cursor: pointer;
`;
export const User = styled.img`
width: 26px;
height: 26px;
margin-right: 34px;
border-radius: 50%;
border: none;
background: ${({theme}) => theme.white};
cursor: pointer;
`;

export const OrangeContainer = styled.div`
background: ${({theme}) => theme.orange};
display: flex;
justify-content: space-between;
padding: 28px 34px;
`
export const TextContainer = styled.div`
display: flex ;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`
export const Title = styled.h1`
text-align: center;
color: ${({theme}) => theme.white};
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 24px;
`
export const   Text = styled.p`
margin-top: 14px;
color: ${({theme}) => theme.white};
font-family: Ubuntu;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
`
export const   ButtonCalendar = styled.button`
display: flex;
align-items: center;
justify-content: space-evenly;
border: none;
background:  ${({ theme }) => theme.white};
border-radius: 4px;
padding: 7px 14px;
width: 161px;
height: 38px;
cursor: pointer;
right: 34px;
top: calc(50% - 38px/2);
transition: 0.5s;
&:hover{
    background:  ${({ theme }) => darken(0.1, theme.white)};
}
`

export const Calendar = styled.img`
width: 16px;
height: 16px;
`;