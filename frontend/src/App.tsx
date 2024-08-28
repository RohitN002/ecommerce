import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'

function App() {


  return (
    <BrowserRouter>
<Routes>
  <Route path='/Login' element={<Login/>} />
  <Route path='/Signup' element={<Signup/>} />
 <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
   {/* <Route path='/' element={} />
  <Route path='/' element={} /> */}
  
</Routes>
    <h3>Ecommerce app  </h3>
    </BrowserRouter>
  )
}

export default App
