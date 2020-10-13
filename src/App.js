import React from 'react';
import './App.css';
import Logo from './components/logo';
import Paragraph from './components/paragraph';
import Author from './components/author';

function App() {
  const paragraphText = "“Code is like humor. When you have to explain it, it’s bad.”";
  const author = "Maxi";
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <Paragraph text={paragraphText}/>
        <Author author={author}/>
      </header>
    </div>
  );
}

export default App;
