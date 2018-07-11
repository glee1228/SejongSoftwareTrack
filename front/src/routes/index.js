/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/App';

// Child new routes
import home from './home';
import trackinfo from './pages/trackInfo'
import hci from './pages/hci'
import multi from './pages/multi'
import iot from './pages/iot'
import systemAvoid from './pages/system'
import ai from './pages/ai'
import vr from './pages/vr'
import security from './pages/security'
import data from './pages/data';
import edu from './pages/edu';
import defence from './pages/defence';

import apply from './pages/apply';
import graduate from './pages/graduate';
import findtrack from './pages/findtrack';
import mysubject from './pages/mysubject';

// Child origin routes
import login from './login';
import table from './dashboardPages/tables';
import button from './dashboardPages/buttons';
import flotcharts from './dashboardPages/flotCharts';
import forms from './dashboardPages/forms';
import grid from './dashboardPages/grid';
import icons from './dashboardPages/icons';
import morrisjscharts from './dashboardPages/morrisjsCharts';
import notification from './dashboardPages/notification';
import panelwells from './dashboardPages/panelWells';
import typography from './dashboardPages/typography';
import blank from './dashboardPages/blank';
import error from './error';
import mytrack from './pages/mytrack';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const backgroundImg = require('../public/background.png');

const background = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundPosition: '52% 52%',
  backgroundSize: 2800
}

export default [

  {
    path: '/login',
    children: [
      login,
    ],
    async action({ next, render, context }) {
      const component = await next();
      if (component === undefined) return component;

      document.body.style.backgroundImage = `url(${backgroundImg})`;
      document.body.style.backgroundPosition = '52% 52%';
      document.body.style.backgroundSize = '2800px';

      return render(
        <App context={context}>
          <div style={background}>
            {component}
          </div>
        </App>
      );
    },
  },{
    path: '/track',
    children: [
      hci,
      multi,
      iot,
      systemAvoid,
      ai,
      vr,
      security,
      data,
      edu,
      defence,
    ],
    async action({ next, render, context }) {
      const component = await next();
      if (component === undefined) return component;
      return render(
        <div style={background}>
          <Header />
          <div className="page-content">
            <Sidebar />
            <div id="page-wrapper" className="page-wrapper">
              <App context={context}>{component}</App>
            </div>
            <Footer />
          </div>
        </div>
      );
    },
  },

  {
    path: '/',

  // keep in mind, routes are evaluated in order
    children: [
      home,
      trackinfo,
      hci,

      apply,
      graduate,
      mytrack,
      findtrack,
      mysubject,


      // contact,
      table,
      button,
      flotcharts,
      forms,
      grid,
      icons,
      morrisjscharts,
      notification,
      panelwells,
      typography,
      // register,
      blank,

      // place new routes before...
      // content,
      error,
    ],

    async action({ next, render, context }) {
      // console.log('inside dashboard');
      const component = await next();
      // console.log('inside dasdboard component', component);
      if (component === undefined) return component;
      return render(
        <div style={background}>
          <Header />
          <div className="page-content">
            <Sidebar />
            <div id="page-wrapper" className="page-wrapper">
              <App context={context}>{component}</App>
            </div>
            <Footer />
          </div>
        </div>
      );
    },
  },
  {
    path: '/error',
    children: [
      error,
    ],
    async action({ next, render, context }) {
      // console.log('inside error');
      const component = await next();
      // console.log('inside error with component', component);
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  }
];
