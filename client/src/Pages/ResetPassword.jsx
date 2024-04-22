import { useState } from 'react'
import MainLayout from "../components/Layout/MainLayout"
import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom'
const ResetPassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const {id, token} = useParams();
    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            console.log("clicked");
            if(password != cpassword){
                alert("Password and confirm password should to be same")
            }

            axios.post(`http://localhost:4000/api/auth/reset-password/${id}/${token}`, { password })
                .then(res => {
                    if (res.data.success) {
                        navigate("/join");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    // Handle error here if necessary
                });
        } catch (error) {
            console.log(error)
        }
    };
    
  return (
    <MainLayout>
         <div className=' md:w-11/12 max-w-full md:max-w-[650px] p-4 md:p-4 rounded-3xl bg-white border-2 border-gray-100 m-auto mt-10'>
            <h1 className='text-2xl md:text-4xl font-semibold'>Create a new password </h1>
            <div className='mt-8'>
                <div className='flex flex-col'>
                    <label className='text-md md:text-lg font-medium'>Password</label>
                    <input 
                        onChange={((e)=>{setPassword(e.target.value)})}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="New Password"/>
                </div>
                <div className='flex flex-col'>
                    <label className='text-md md:text-lg font-medium'>Confirm Password</label>
                    <input 
                        onChange={((e)=>{setCPassword(e.target.value)})}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Confirm Password"/>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg' onClick={handleSubmit}>CREATE PASSWORD</button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Dont have an account?</p>
                    <button className='ml-2 font-medium text-base text-violet-500'><Link to= "/register">Sign up</Link></button>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default ResetPassword
