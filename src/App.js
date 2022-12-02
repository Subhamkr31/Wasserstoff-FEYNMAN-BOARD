
import './App.css'
import Landingpage from './Component/Landingpage'
import DashBoard from './Component/DashBoard'
import AddTopic from './Component/AddTopic'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Usercreate from './Component/Usercreate'


function App() {

  return (
    <BrowserRouter >
      <div className="App">
         <Routes>
         <Route path= '/' element= { <Landingpage />} />
         <Route path = '/create' element = { < Usercreate />} />
          <Route path='/user/:StudentName' element={<DashBoard />} />
          <Route path='/addtopic/:StudentName' element={<AddTopic />} />
        </Routes> 
      </div>
    </BrowserRouter>
  )
}

export default App

