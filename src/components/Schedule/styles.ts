import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
margin-top: 110px;
margin-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 200px;
`;

export const ButtonSelect= styled.button`
margin-top: 10px;
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
`;