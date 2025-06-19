import React, { useEffect } from 'react';
// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import Footer from './components/Footer';
// import router
import { BrowserRouter as Router } from 'react-router-dom';
import {gapi} from 'gapi-script'
import Login from './components/Login';
import Logout from './components/Logout';

const clientId = "187904825061-qraoo6cmgphko14q2g9pqa0mdtfu2oio.apps.googleusercontent.com"


const App = () => {

  useEffect(() => {
    function start(){
      gapi.client.init({
        client_Id: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start)
  })

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
        <Footer/>
      </Router>
      
    </>
  );
};

export default App;
