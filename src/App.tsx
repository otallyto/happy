import React from 'react';
import './styles/global.css'
import './styles/pages/landing.css'
import logoImg from './assets/logo.svg'
import {FiArrowRight} from 'react-icons/fi'
function App() {
  return (
    <div id="page-landing">
     <div className="content-wrapper">
     <img src={logoImg} alt="Happy logo"/>
     <main>
       <h1>Leve felicidade para o mundo</h1>
       <p>Visite orfanatos e mude o dia de muitas crianças.</p>
     </main>
     <div className="location">
       <strong>Boa Vista</strong>
       <span>Roraima</span>
     </div>
     <a href="" className="enter-app">
       <FiArrowRight size={24} color="rgba(0,0,0,0.6)"/>
     </a>
     </div>
    </div>
  );
}

export default App;
