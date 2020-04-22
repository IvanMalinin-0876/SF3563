import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'


import './App.css';
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
import MyApp from './components/MyApp';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <ThemeProvider withToastContainer>
          <MyApp></MyApp>
        </ThemeProvider>
      </HashRouter>
    );
  }
}