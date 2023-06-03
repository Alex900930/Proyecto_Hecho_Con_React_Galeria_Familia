import MyFamili from './components/MyFamili';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="titulo-principal-texto">
       <h1>Miembros de la Familia</h1>
       </div>
       <div className="componentes">
        <MyFamili />
       </div>
    </div>
  );
}

export default App;
