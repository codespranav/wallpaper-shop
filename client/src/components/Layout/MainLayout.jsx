/* eslint-disable react/prop-types */
import Navbar from '../Navbar'
import Footer from '../Footer'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const MainLayout = (props) => {
  return (
    <div>
        <Navbar/>
        <ToastContainer/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default MainLayout
