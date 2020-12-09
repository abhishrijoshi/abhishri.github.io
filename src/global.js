import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondry};
    height: 25vh;
    text-rendering: optimizeLegibility;
  
  }

  h1 {
    margin-top:300px;
    margin-bottom: 0px;
    
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }




  
  }
  div {
    text-align: center;
  }

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  
  }


  hr {
   
   border: 2px dotted ${({ theme }) => theme.primary};
  border-style: none none  dotted; 
  color: ${({ theme }) => theme.primaryLight} ; 
  background-color: ${({ theme }) => theme.secondry} ;
  margin-left: auto;
  margin-right: auto;
  }


  button {
    font-size: 20px;
    border: 1px solid black;
    display: inline-block;
    color: hsl(222, 25%, 14%);
    position: relative;
}

button::after {
     content: '';
     position: absolute;
     width: 100%;
     transform: scaleX(1);
     height: 3px;
     bottom: 0;
     left: 0;
     background-color: hsl(243, 80%, 62%);
     transform-origin: bottom left;
     transition: transform .3s ease-in-out;
 }

button:hover::after {
     transform: scaleX(0);
     transform-origin: bottom right;
 }
h3{
  position: absolute;
  bottom: 250px;
  text-align: center;
  justify-content: center;
  align-items: center;
}

h4{
  position: absolute;
  bottom: 100px;
  text-align: center;
  
}



}
  `
