export default `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

body {
  background-color: bisque;
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
.row {
  margin-left: 1rem;
  margin-right: 1rem;
}
.col {
  padding-left: 1rem;
  padding-right: 1rem;
}
img.logo {
  width: 2rem;
  height: auto;
}

a {
  text-decoration: inherit;
  color: inherit;
}
`;
