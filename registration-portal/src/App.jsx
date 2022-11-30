import VerifyPin from './components/VerifyPin'
import Register from './components/Register'
import Confirm from './components/Confirm'
import './App.css'
import { Route, Routes } from "react-router-dom"


function App() {

  function renderRoutes(){
    let isAuth = true
    if(isAuth)
     return <>
            <Route path='/' element ={<Register />} ></Route>
            <Route path='/confirm' element ={<Confirm />} ></Route>
            </>
    return <>
            <Route path='/' element = {<VerifyPin />} ></Route>
  
          </>
  }


  return (
      <>
        <div>
          <Routes>
           {renderRoutes()}
          
          </Routes>
        </div>
      </>
  )
}

export default App
