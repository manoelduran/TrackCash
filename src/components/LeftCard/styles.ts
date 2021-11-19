import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 634px;
height: 820.69px;
background: ${({theme}) => theme.white};
filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.3));
border-radius: 8px 8px 0px 0px;
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
export const GraphicDiv = styled.div`
position: static;
width: 600.24px;
height: 251.69px;
margin-left: 16.88px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const Text = styled.h1`
margin-top: 50px;
background: ${({theme}) => theme.background};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 600.24px;
height: 207.56px;
align-items: center;
justify-content: center;
`;
export const LegendDiv = styled.div`
margin-top: 30px;
display: flex;
justify-content: space-evenly;
align-items: center;
`;
export const LeftLegend = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const LeftColor = styled.div`
width: 50px;
height: 20px;
background: ${({theme}) => theme.orange};
`;
export const LeftText = styled.div`
margin-left: 8px;
font-family: Ubuntu;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
`;
export const RightLegend = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const RightColor = styled.div`
margin-left: 64px;
width: 50px;
height: 20px;
background: ${({theme}) => theme.blue};
`;
export const RightText = styled.div`
margin-left: 8px;
font-family: Ubuntu;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
`;


export const TaxDiv = styled.div`

`;
export const TaxLeft = styled.div`

`;
export const IconLeft = styled.img`

`;
export const TaxValueLeft = styled.h1`

`;
export const TaxSpanLeft = styled.span`

`;
export const TaxRight = styled.div`

`;
export const IconRight = styled.img`

`;
export const TaxValueRight = styled.h1`

`;
export const TaxSpanRight = styled.span`

`;