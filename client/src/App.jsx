import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Join from "./Pages/Join"
import Register from "./components/Register"
import ForgotPassword from "./Pages/ForgotPassword"
import ResetPassword from "./Pages/ResetPassword"
import IsLoggedIn from "./routes/IsLoggedIn"
import AdminHome from "./Pages/Admin/AdminHome"
import Category from "./Pages/Admin/Category"
import Wallpaper from "./Pages/Admin/Wallpaper"
import AddWallpaper from "./Pages/Admin/AddWallpaper"
import AdminRoute from "./routes/AdminRoute"
const App = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route element = {<IsLoggedIn/>}>
          <Route path='/join' element = {<Join/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/forgot-password' element = {<ForgotPassword/>}/>
          <Route path='/reset-password/:id/:token' element = {<ResetPassword/>}/>
        </Route>

        <Route path="/admin" element = {<AdminRoute/>}>
          <Route path="home" element = {<AdminHome/>}/>
          <Route path = "admin-category" element = {<Category/>}/>
          <Route path = "admin-wallpaper" element = {<Wallpaper/>}/>
          <Route path = "add-wallpaper" element = {<AddWallpaper/>}/>
        </Route>
    </Routes>
  )
}

export default App
