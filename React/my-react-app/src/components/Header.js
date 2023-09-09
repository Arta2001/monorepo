// Header.js
import React from 'react';
import './Header.css'; 
import '../bootstrap.min.css';

function Header(props) {
  return (
    <header className="header">
       <div className="header-logo">
            
            <img width="150" height="50" src="https://pabau.com/wp-content/uploads/2022/03/pabau_logo.png" class="attachment-full size-full wp-image-234" alt="Pabau - Clinic Software for your Business | Go Paperless Today" loading="lazy"></img> 
            </div>
      <div className="container">
        <div className="header-content">
         
          <div className="header-navigation">
            <nav>
       
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Step {props.stage}/{props.totalNrStage}</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
