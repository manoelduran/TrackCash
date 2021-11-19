import styled from "styled-components";

export const Container = styled.div`
margin-left: 30px;
width: 634px;
height: 820.69px;
background: ${({theme}) => theme.white};
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
