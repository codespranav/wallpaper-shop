import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import Login from '../components/Login'
import { useAuth } from '../contexts/auth-context'
import { redirect } from 'react-router-dom'

const Join = () => {
  const {auth} = useAuth();
  return (
    <MainLayout>
    {/* {auth.token ? redirect("/") :  */}
    
      <Login/>
    {/* } */}
    </MainLayout>
  )
}

export default Join
