import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import Spinner from '../components/Reusable/Spinner';
import { BASE_URL } from '../../helper/helper'

const AdminRoute = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/auth/user-auth`, {
          headers: {
            Authorization: auth?.token
          }
        });
        if (response.data.success) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false); // Set isAdmin to false on error
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  return isAdmin ? <Outlet /> : <Spinner/>;
};

export default AdminRoute;
