import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Routes_ from './Components/Routes_';
import Routes_map from './Components/Routes_map';
import Fare from './Components/Fare';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="route" element={<Routes_/>} />
        <Route path="routes_map" element={<Routes_map/>} />
        <Route path="fare" element={<Fare/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
