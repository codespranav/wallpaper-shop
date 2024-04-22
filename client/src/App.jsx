import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Join from "./Pages/Join"
import Register from "./components/Register"
import ForgotPassword from "./Pages/ForgotPassword"
import ResetPassword from "./Pages/ResetPassword"
import { useAuth } from "./contexts/auth-context"
import IsLoggedIn from "./routes/IsLoggedIn"
const App = () => {
  const {auth} = useAuth()
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route element = {<IsLoggedIn/>}>
          <Route path='/join' element = {<Join/>}/>
          <Route path='/register' element = {auth?.token ? <Home/> : <Register/>}/>
          <Route path='/forgot-password' element = {<ForgotPassword/>}/>
          <Route path='/reset-password/:id/:token' element = {<ResetPassword/>}/>
        </Route>
    </Routes>
  )
}

export default App
