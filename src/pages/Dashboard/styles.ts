import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background: ${({theme}) => theme.background};
`

export const CardDiv = styled.div`
margin-top: 40px;
height: 868.69px;
background: ${({theme}) => theme.background};
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;

`;

export const FooterDiv = styled.div`
background: ${({theme}) => theme.background};
`;
