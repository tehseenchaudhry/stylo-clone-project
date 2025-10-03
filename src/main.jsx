import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import Abc from './component/Abc.jsx';
import ShoeCategory from './component/ShoesCategory.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App></App>}>
          <Route path='/abc' element={<Abc></Abc>}></Route>
          <Route index element={<Abc></Abc>}></Route>
          <Route path='/shoes-category/:category' element={<ShoeCategory></ShoeCategory>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
