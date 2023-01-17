import Header from './components/Header/Header';
import './App.css';
import React from 'react';
import Topcontainer from './components/Topcontainer/Topcontainer';
import Skillcontainer from './components/Skillcontainer/Skillcontainer';
import Projectcontainer from './components/projects/Projectcontainer';
import Contactme from './components/Contactme/Contactme';
function App() {
  return (
    <div className="App">
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectcontainer />
      <Contactme />
    </div>

  );
}

export default App;
