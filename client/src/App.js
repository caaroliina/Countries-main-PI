import './App.css';
import {Route, Routes} from 'react-router-dom';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/form' element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
