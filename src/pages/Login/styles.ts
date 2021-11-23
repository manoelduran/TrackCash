import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
padding:  84px 161px ;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
background: ${({ theme }) => theme.background};
`;
export const LoginContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
opacity: 0.9;
    box-shadow: 0px 0px 14px 7px rgba(0, 0, 0, 0.25);
    border-radius: 14px 0px 0px 14px;
    background: ${({ theme }) => theme.white};
`;
export const Logo = styled.img`
position: static;
width: 144px;
height: 144px;
left: 79px;
top: 0px;
`;
export const Title = styled.h1`
margin-top: 30px;
position: static;
width: 281px;
height: 24px;
left: 10.5px;
top: 159px;
font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 24px;
color: ${({ theme }) => theme.orange};
`;
export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const EmailInput = styled.input`
margin-top: 30px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
border-radius: 4px;
border: none;
outline: none;
background: ${({ theme }) => theme.background}  url("/email.png") no-repeat 97% 50%;
position: static;
width: 302px;
height: 45px;
left: 0px;
top: 0px;
&:hover{
    border: 1px solid ${({theme}) => theme.orange};
}
&:focus{
   outline: 1px solid ${({theme}) => theme.orange};
}
`;
export const PasswordInput = styled.input`
margin-top: 25px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
border: none;
outline: none;
border-radius: 4px;
background: ${({ theme }) => theme.background}  url("/lock.png") no-repeat 97% 50%;
position: static;
width: 302px;
height: 45px;
left: 0px;
top: 69px;
&:hover{
    border: 1px solid ${({theme}) => theme.orange};
}
&:focus{
   outline: 1px solid ${({theme}) => theme.orange};
}
`;
export const FormButton = styled.button`
margin-top: 30px;
position: static;
border: none;
width: 302px;
height: 45px;
left: 0px;
top: 0px;
font-family: Ubuntu;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
background: ${({ theme }) => theme.orange};
color: ${({ theme }) => theme.white};
cursor: pointer;
transition: 0.5s;
&:hover{
    background: ${({ theme }) => darken(0.05, theme.orange)};
}
`;
export const Footer = styled.div`
width: 302px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const RememberDiv = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Remember = styled.input`
left: 5%;
right: 5%;
top: 5%;
bottom: 5%;
`;

export const RememberSpan = styled.span`
color: ${({ theme }) => theme.orange};
background: none;
font-family: Ubuntu;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
margin-left: 12px;
`;

export const ExtraDiv = styled.div`
margin-top: 24px;
display: flex;
flex-direction: column;
justify-content: center;
`;
export const Recovery = styled.button`
color: ${({ theme }) => theme.orange};
border: none;
background: none;
font-family: Ubuntu;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
cursor: pointer;
`;
export const Register = styled.button`
color: ${({ theme }) => theme.orange};
border: none;
background: none;
font-family: Ubuntu;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
text-align: right;
cursor: pointer;
`;

export const TextContainer = styled.div`
width: 100%;
height: 100%;
background: url("background.jpeg");
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background:  ${({ theme }) => theme.orange};
    opacity: 0.9;
    box-shadow: 0px 0px 14px 7px rgba(0, 0, 0, 0.25);
    border-radius: 0px 14px 14px 0px;
`
export const TextTitle = styled.h1`
text-align: center;
font-weight: 700;
position: static;
font-family: Ubuntu;
font-size: 36px;
line-height: 60px;
font-style: normal;
padding:  0px 64px ;
color: ${({ theme }) => theme.white};
align-items: center;
`;
export const Text = styled.p`
text-align: center;
font-family: Ubuntu;
position: static;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
display: flex;
align-items: center;
justify-content: center;
padding:  0px 64px ;
margin-top: 30px;
color: ${({ theme }) => theme.white};
`;