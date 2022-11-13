import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from '../src/context/AuthContext';
import { useRouter } from 'next/router'
import ProtectedRoute from '../src/components/ProtectedRoute'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import React, { useEffect } from 'react';

const noAuthRequired = ['/',
                       '/login',
                       '/404',
                       '/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}

export default MyApp
