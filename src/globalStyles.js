export default `body {
  margin: 0;
  font-family: 'Shippori Antique', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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

#root > div:nth-of-type(2){
  flex: 1;
}
.type-normal {
  background-color:#A8A878;
  border-top-color:#D8D8D0;
  border-bottom-color:#705848
 }
 .type-fire {
  background-color:#F08030;
  border-top-color:#F8D030;
  border-bottom-color:#C03028
 }
 .type-water {
  background-color:#6890F0;
  border-top-color:#98D8D8;
  border-bottom-color:#807870
 }
 .type-grass {
  background-color:#78C850;
  border-top-color:#C0F860;
  border-bottom-color:#588040
 }
 .type-electric {
  background-color:#F8D030;
  border-top-color:#F8F878;
  border-bottom-color:#B8A038
 }
 .type-ice {
  background-color:#98D8D8;
  border-top-color:#D0F8E8;
  border-bottom-color:#9090A0
 }
 .type-fighting {
  background-color:#C03028;
  border-top-color:#F08030;
  border-bottom-color:#484038
 }
 .type-poison {
  background-color:#A040A0;
  border-top-color:#D880B8;
  border-bottom-color:#483850
 }
 .type-ground {
  background-color:#E0C068;
  border-top-color:#F8F878;
  border-bottom-color:#886830
 }
 .type-flying {
  background-color:#A890F0;
  border-top-color:#C8C0F8;
  border-bottom-color:#705898
 }
 .type-psychic {
  background-color:#F85888;
  border-top-color:#F8C0B0;
  border-bottom-color:#789010
 }
 .type-bug {
  background-color:#A8B820;
  border-top-color:#D8E030;
  border-bottom-color:#A8B820
 }
 .type-rock {
  background-color:#B8A038;
  border-top-color:#E0C068;
  border-bottom-color:#886830
 }
 .type-ghost {
  background-color:#705898;
  border-top-color:#A890F0;
  border-bottom-color:#483850
 }
 .type-dragon {
  background-color:#7038F8;
  border-top-color:#B8A0F8;
  border-bottom-color:#483890
 }
 .type-dark {
  background-color:#705848;
  border-top-color:#A8A878;
  border-bottom-color:#484038
 }
 .type-steel {
  background-color:#B8B8D0;
  border-top-color:#D8D8C0;
  border-bottom-color:#807870
 }
 .type-fairy {
  background-color:#F0B6BC;
  border-top-color:#F5CAD1;
  border-bottom-color:#905F63
 }
 .type-unknown {
  background-color:#6AA596;
  border-top-color:#A4D8CB;
  border-bottom-color:#40685E
 }
 .t-type {
  border-style:solid none;
  border-width:1px;
  border-radius:5px;
  padding:0.15em;
  font-variant:small-caps;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
  font-size: 18px;
  margin-right: 5px;
  color:#F8F8F8;
  text-shadow:0 1px 1px #807870
 }
`;
