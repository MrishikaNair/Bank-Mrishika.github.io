import '../styles/App.css';
import '../styles/navbar.css';
import '../styles/cover.css';
import '../styles/Business.css';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { BrowserRouter as Router, Link, NavLink, Route, Switch,Navigate } from "react-router-dom";



import Select from 'react-select'

import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import Back from '../assets/Background.png';
import React from 'react';
import {useState} from 'react';
import {Button} from '@mui/material';
import { cyan } from '@mui/material/colors';


import { useEffect } from "react";


const options = [
  {
  value:'grow my money',label:'grow my money',
  value:'prevent fraud',label:'prevent fraud',
  value:'work on my credit',label:'work on my credit',
    }
]
const MyComponent = () => (
  <Select options={options} />
)

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: cyan['A100'],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#0e0707'
    },
  },
});


const Alogin=() =>{

  useEffect(()=> {
    document.title="Bank-Home";
    
  },[]);
  const [active, setActive]=useState("About");
 
  return(
    <>
    
    <ThemeProvider theme={theme}>
    <body>
    
    <div class='container'>
      
        <section id="navbar">
          <div id='nav'>
            
            {/*<Link to="/Categories"></Link>*/}
            <br></br>
            <a><Button>Investing</Button></a>
            <a ><Link to="/commercial"><Button>Commercial</Button></Link></a>
            <a ><Link to="/business"><Button>Business</Button></Link></a>
            <a ><Link to="/personal"><Button>Personal</Button></Link></a>
            <a ><Link to="/alogin"><Button>About</Button></Link></a>
            
               
        
        </div>
        
        
        
        
        </section>
        
        <img  src={Back} alt="Background" style={{ width: '100%', height: 760 }} />
        
        

        
      <div class="text-img">New Bank for <br></br> a New Age</div>
      <section class="A">
        <p class="wwa">Who we are</p>
        <p class="wwat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br></br>
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </section>

      <section class="B">
      <p class="wwa">Our Services</p>

      <div class="row" >
            <div class="column">
            <div class="whitecard">
                <div class="container" >
                  <p class="wwac" >PERSONAL <br></br> BANKING</p> 
                  <br></br>
                    <p class="wwat">Checking, savings, loans <br></br> and more from locals, here  <br></br>to help in-person or online.</p> 
                </div>
            </div></div>
            <div class="column">
            <div class="whitecard">
                <div class="container">
                  <p class="wwac" >SMALL BUSINESS <br></br>BANKING</p>
                    
                  <br></br>
                    <p class="wwat">Checking, savings, loans <br></br> and more from locals, here  <br></br>to help in-person or online.</p> 
                </div>
            </div></div>
            <div class="column">
            <div class="whitecard">
                <div class="container">
                  <p class="wwac" >COMMERCIAL <br></br>BANKING</p> 
                    
                  <br></br>
                    <p class="wwat">Checking, savings, loans <br></br> and more from locals, here  <br></br>to help in-person or online.</p> 
                </div>
            </div></div>
            <div class="column">
            <div class="whitecard">
                <div class="container">
                  <p class="wwac" >WEALTH <br></br>MANAGEMENT</p> 
                    
                  <br></br>
                    <p class="wwat">Checking, savings, loans <br></br> and more from locals, here  <br></br>to help in-person or online.</p> 
                </div>
            </div></div>
            
            </div>
      </section>

      
      </div>
      <div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">About</a></li>
                <li class="list-inline-item"><a href="/personal">Personal</a></li>
                <li class="list-inline-item"><a href="/business">Business</a></li>
                <li class="list-inline-item"><a href="/commercial">Commercial</a></li>
                <li class="list-inline-item"><a >Investing</a></li>
                
            </ul>
            <p class="copyright">Bank Website</p>
        </footer>
    </div>
    

  </body>
      
      </ThemeProvider>
      
    </>
);
}

export default Alogin;