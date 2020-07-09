import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
  .hoss{
    font-family: 'Changa', sans-serif;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }
`