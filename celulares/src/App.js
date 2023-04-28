
import './App.css';
import navbar from './components/navbar/navbar';
import itemlistcontainer from './components/itemlistcontainer/itemlistcontainer';
function App() {
  return (
    <div className="App">
      <navbar/>
      <itemlistcontainer greeting={Bienvenido}/>
    </div>
  );
}

export default App;
