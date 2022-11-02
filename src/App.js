import './App.css';
import Routes from './routes';

import { createContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
import React , {useReducer, useState} from 'react';
import { initialState ,reducer } from './reducer/useReducer';
export const UserContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value = {{state,dispatch}}>
    <Router>
      <ThemeProvider theme={theme}>

      <Routes />


      </ThemeProvider>
         
    </Router>

    </UserContext.Provider>
   
       
  );
}
