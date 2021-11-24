import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root, body, html {
    height: 100%;
    width: 100%;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    };

    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    };
  };

  body {
    background: ${({ theme }) => theme.white};
  };

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:600;
  };

  button {
    font-family: Helvetica, sans-serif;
    font-weight: bold;
  };
  a{
    text-decoration: none;
  };
`;
