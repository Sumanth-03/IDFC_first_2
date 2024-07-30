import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/home'
import Product from './Components/Product'
import Offer from './Components/Offer'

import { Button } from "@material-tailwind/react";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/offers' element={<Offer/>}></Route>
      <Route path='/product' element={<Product/>}></Route>

    </Routes>
  );
}

export default App;
