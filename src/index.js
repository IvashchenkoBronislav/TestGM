import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/media.scss"
import "./scss/mane.scss"
import { Header} from './jsx/header';
import { ArrowUp, BorderBee } from './jsx/modail';
import { Footer } from './jsx/footer';


const root = ReactDOM.createRoot(document.getElementById('body-website'));
root.render(
  <React.StrictMode>
      <Header></Header>
      <BorderBee></BorderBee>
      <Footer></Footer>
      <ArrowUp></ArrowUp>
  </React.StrictMode>
);

