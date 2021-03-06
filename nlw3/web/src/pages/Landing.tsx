import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css'

import logoImg from '../images/logo.svg'

function Landing() {
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
  
          <main>
            <h1>leve felicidade para o mundo</h1>
            <p>visite orfanatos e mude o dia de muitas criancas</p>
          </main>
          <div className="location">
            <strong>Rio do Sul</strong>
            <span>Santa Catarina</span>
          </div>
  
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgbs(0, 0, 0, 0, 0.6" />
          </Link>
  
        </div>
      </div> 
    )
}

export default Landing