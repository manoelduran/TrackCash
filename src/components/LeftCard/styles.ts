import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
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
margin-top: 65px;
margin-left: 111px;
display: flex;
flex-direction: row;
align-items: flex-start;
width: 412px;
height: 139px;
`;
export const TaxLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 191px;
height: 139px;
`;
export const IconLeft = styled.img`
width: 36px;
height: 36px;

`;
export const TaxValueLeft = styled.h1`
margin-top: 19px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 39px;
color: ${({theme}) => theme.blue};
text-align: center;
`;
export const TaxSpanLeft = styled.span`
margin-top: 16px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-align: center;
color: ${({theme}) => theme.dark};
`;
export const TaxRight = styled.div`
margin-left: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 191px;
height: 139px;
`;
export const IconRight = styled.img`
width: 36px;
height: 36px;
`;
export const TaxValueRight = styled.h1`
margin-top: 19px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 39px;
color: ${({theme}) => theme.green};
text-align: center;
`;
export const TaxSpanRight = styled.span`
margin-top: 16px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-align: center;
color: ${({theme}) => theme.dark};
`;

export const BreakLine = styled.div`
margin-left: 24px;
margin-top: 60px;
position: static;
width: 586px;
height: 1px;
background: ${({theme}) => theme.breakLine};
`;

export const SecondDiv = styled.div`
margin-top: 60px;
margin-left: 111px;
display: flex;
flex-direction: row;
align-items: flex-start;
width: 412px;
height: 139px;
`;

export const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: static;
width: 191px;
height: 139px;
`;

export const ValueLeft = styled.div`
color: ${({theme}) => theme.blue};
margin-top: 20px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 39px;
text-align: center;
`;
export const SpanLeft = styled.div`
color: ${({theme}) => theme.dark};
margin-top: 16px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-align: center;
`;
export const Right = styled.div`
margin-top: -5px;
margin-left: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: static;
width: 191px;
height: 139px;
`;
export const ValueRight = styled.div`
margin-top: 20px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 39px;
text-align: center;
color: ${({theme}) => theme.green};
`;
export const SpanRight = styled.div`
margin-top: 16px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
color: ${({theme}) => theme.dark};
`;