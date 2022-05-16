import './App.css';

import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCondicional from './components/RenderCondicional';

function App() {
  return (
    <div className="App">
      <h2>REACT</h2>
      <FirstComponent />
      <Hooks />
      <List />
      <RenderCondicional x={5}/>
    </div>
  );
}

export default App;
