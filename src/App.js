import React, {createContext, useContext, useState, useEffect, Component} from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';

//pages
import HomePage from './pages/Home/HomePage';
import StorePage from './pages/Store/StorePage';
import ProductPage from './pages/Store/ProductPage';
import CheckoutPage from "./pages/Finish/CheckoutPage";
import ContactPage from "./pages/Contact/ContactPage";
import FaqPage from "./pages/Faq/FaqPage";

import { StateContext } from './context/StateContext';



  
function App() {

    return (
      <StateContext>
          <Router>            
            <Routes>
              <Route exact path='/' element={<HomePage />}></Route>
              <Route exact path='/prodavnica' element={<StorePage />}></Route>
              <Route exact path='/porudzba' element={<CheckoutPage />}></Route>
              <Route exact path='/kontakt' element={<ContactPage />}></Route>
              <Route exact path='/faq' element={<FaqPage />}></Route>
              <Route exact path='/proizvod/:slug' element={<ProductPage />}></Route>
            </Routes>
          </Router>
      </StateContext>
   );
}
  
export default App;
