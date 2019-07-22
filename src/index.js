import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ModuleSignIn from './components/ModuleSignIn';
import ModuleSignUp from './components/ModuleSignUp';

function App() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
        <ModuleSignIn />
        <ModuleSignUp />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));


