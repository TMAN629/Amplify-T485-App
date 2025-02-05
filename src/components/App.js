import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Calendar from "./Calendar";
import Photos from "./Photos";
import EBay from "./Photo-Components/EBay";
import Forms from "./Forms"
import LatestEvents from "./LatestEvents";
import SignIn from "./SignIn"
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";

import './css/app.css';

import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/calendar" element={ <Calendar /> } />
          <Route path="/photos" element={ <Photos /> } />
          <Route path="/photos/ebay" element={ <EBay /> } />
          <Route path="/forms" element={ <Forms /> } />
          <Route path="/latestevents" element={ <LatestEvents /> } />
          <Route path="/signin" element={ <SignIn /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
