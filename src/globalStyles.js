export default `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: bisque;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

@media (max-width: 575px) {
  html {
    font-size: 15px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  html {
    font-size: 16px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  html {
    font-size: 17px;
  }
}
@media (min-width: 992px) {
  html {
    font-size: 18px;
  }
}

a {
  text-decoration: inherit;
  color: inherit;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#root > div:nth-child(2){
  flex: 1;
}
`;
