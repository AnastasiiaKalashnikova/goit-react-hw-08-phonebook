import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1, h2, h3 {
    margin-top: 0;
}

button {
    cursor: pointer;
}
a {
    text-decoration: none;
      color: black;
&:hover,
  &:focus {
    text-shadow: rgba(95, 158, 160, 0.53) 4px 4px;
  }
}
a.active{
  color: cadetblue;
}
`;
