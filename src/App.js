import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './components/pages/landingpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
