import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Join from "./Pages/Join"
import Register from "./components/Register"
const App = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/join' element = {<Join/>}/>
        <Route path='/register' element = {<Register/>}/>
    </Routes>
  )
}

export default App
