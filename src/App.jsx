import { useState,useEffect } from 'react'
import './App.css'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'



function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     alert ("mount ho ga")
//   console.log("Component mounted");
// }, []);


  return (
    <>
     <Header></Header>
  <Outlet></Outlet>
      
    </>
  )
}

export default App
