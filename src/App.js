import './App.css';

import Experiencia from './pages/experiencia/Experiencia'
import NavBar from './components/navbar/NavBar';
import Presentacion from './pages/presentacion/Presentacion';
import SobreMi from './pages/sobremi/SobreMi';

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
      </header>
        <main>
          <Presentacion/>
          <SobreMi/>
          <Experiencia/>
          
          
        </main>
    </div>
  );
}

export default App;
