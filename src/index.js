import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/css/revolution/layers.css';
import './assets/css/revolution/navigation.css';


import './assets/css/revolution/fonts/font-awesome/css/font-awesome.css';
import './assets/css/revolution/fonts/font-awesome/css/font-awesome.min.css';
import './assets/css/revolution/fonts/pe-icon-7-stroke/css/helper.css';
import './assets/css/revolution/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css';

import './assets/css/revolution/navigation-skins/ares.css';
import './assets/css/revolution/navigation-skins/custom.css';
import './assets/css/revolution/navigation-skins/dione.css';
import './assets/css/revolution/navigation-skins/erinyen.css';
import './assets/css/revolution/navigation-skins/gyges.css';
import './assets/css/revolution/navigation-skins/hades.css';
import './assets/css/revolution/navigation-skins/hebe.css';
import './assets/css/revolution/navigation-skins/hephaistos.css';
import './assets/css/revolution/navigation-skins/hermes.css';
import './assets/css/revolution/navigation-skins/hesperiden.css';
import './assets/css/revolution/navigation-skins/metis.css';
import './assets/css/revolution/navigation-skins/persephone.css';
import './assets/css/revolution/navigation-skins/uranus.css';
import './assets/css/revolution/navigation-skins/zeus.css';



import './assets/css/style.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/slick.css';
import './assets/css/responsive.css';
import './assets/css/color.css';
import './assets/css/animate.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-select.min.css';
import './assets/css/fancybox.min.css';
import './assets/css/icons.min.css';

import './assets/css/perfect-scrollbar.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <App></App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
