import './App.css';
import Help from './components/Help';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Help/>
      <Title/>
      <div className="content">
        <LeftPanel/>
        <RightPanel/>
      </div>
    </div>
  );
}

export default App;
