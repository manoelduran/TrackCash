import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 64px;
background: ${({theme}) => theme.dark};
display: flex;
align-items: center;
justify-content: space-between;
color: ${({theme}) => theme.white};
`;


export const Copyright = styled.span`
margin-left: 50px;
`;
export const LinksDiv = styled.div`
margin-right: 34px;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const Term = styled.a`
margin-right: 20px;
color: ${({theme}) => theme.white};
transition: 0.5s;
&:hover{
    color:  ${({ theme }) => darken(0.1, theme.orange)};
}
`;
export const Privacity = styled.a`
margin-right: 20px;
color: ${({theme}) => theme.white};
transition: 0.5s;
&:hover{
    color:  ${({ theme }) => darken(0.1, theme.orange)};
}
`;
export const FAQ = styled.a`
color: ${({theme}) => theme.white};
transition: 0.5s;
&:hover{
    color:  ${({ theme }) => darken(0.1, theme.orange)};
}
`;