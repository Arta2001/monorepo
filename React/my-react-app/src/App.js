// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer'
import ResultPage from './components/ResultPage';
import CardList from './components/CardList';
import './components/Row.css';

function App() {

  const [stage, updateStage]=useState(1);
  const updateStageNr = ()=> {
      this.setState({stage: this.state.stage + 1})
  }

  return (
    <>
     <>
      <Header stage={stage} totalNrStage={2} update={updateStage} />
       <Footer />
      </>
    <Routes>
        <Route path="/" element={<CardList stage={stage} updateStage={updateStage}/>} />
        <Route path="/display" element={<ResultPage stage={stage} updateStage={updateStage}/>} />
      </Routes></> 
        
  );
}

export default App;
