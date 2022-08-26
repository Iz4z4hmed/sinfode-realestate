// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Readmore from './Component/Readmore';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import FoundPG from './Component/FoundPG';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Header/>} />
        <Route exact path='/readmore' element={<Readmore/>} />
        <Route exact path='/found' element={<FoundPG/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
