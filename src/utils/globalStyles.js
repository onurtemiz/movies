import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 body {
  -webkit-overflow-scrolling: touch;
  min-height: 100%;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.text.primaryColor};
  font-family: ${(props) => props.theme.font.primary};
  scrollbar-width:thin;  
 }
html {
  min-height: 100%;
  height:100%;
  width: 100%;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  color: ${(props) => props.theme.text.primaryColor};

} 

a{
  color:${({ theme }) => theme.primaryColor600};
}
`;

export default GlobalStyle;
