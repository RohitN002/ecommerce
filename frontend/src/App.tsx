import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages'
import { authRoutes,DefaultRoutes } from './routes'
function App() {


  return (
    <BrowserRouter>
  
<Routes>
  {
    sessionStorage.getItem("authUser")? 
  ( 
    <>
  <Navbar/>
  <Route path={authRoutes.HOME} element={<HomePage/>}/>
    <Footer/>  </>
):( <>
  <Route path={DefaultRoutes.LOGIN} element={<Login/>} />
  <Route path={DefaultRoutes.SIGNIN} element={<Signup/>} />
 <Route path={DefaultRoutes.ForgotPassword} element={<ForgotPassword/>}/> </> 
) }

 
  
</Routes>

    </BrowserRouter>
  )
}

export default App
