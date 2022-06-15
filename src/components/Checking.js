import React from "react";
import '../styles/Checking.css';
import family from '../assets/family.jpeg';
import { Outlet, Link } from "react-router-dom";
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import {Button} from '@mui/material';
import { cyan } from '@mui/material/colors';
import { color } from "@mui/system";

import Box from '@material-ui/core/Box';

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
const Checking=({})=> {

    return(
        <>
        <ThemeProvider theme={theme}>
        <body>
        <div class="container">
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
        <div class="text-img2">Get started with <br></br>simple and secure<br></br></div><div class="emp">Checking Accounts</div>
        
        <img  class="img" src={family} alt="Background" style={{ marginTop:80,float:'right' ,width: 700 , height: 450 }} />
                
        
        </div>
        <section class="box">
         
          <div id='nav a'>
            
            {/*<Link to="/Categories"></Link>*/}
            <br></br>
            <a><Button>SAVINGS CALCULATOR</Button></a>
            <a ><Button>OVERDRAFT PROTECTION</Button></a>
            <a ><Button>RATES</Button></a>
            <a ><Button>FAQs</Button></a>
            <a ><Button>CONTACTLESS DEBIT CARD</Button></a>
            <a ><Button>COMPARE ACCOUNTS</Button></a>
            <a ><Button>ACCOUNT TYPES</Button></a>
  
        
        </div>
        

        </section>
        
    
        
            
                
        </body>
        </ThemeProvider>
        
        </>
    )

 }
 export default Checking;