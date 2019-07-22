import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));


