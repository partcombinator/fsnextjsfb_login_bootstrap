import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from '../src/context/AuthContext';
import { useRouter } from 'next/router'
import ProtectedRoute from '../src/components/ProtectedRoute'
import 'bootswatch/dist/cosmo/bootstrap.min.css';

const noAuthRequired = ['/',
                       '/login',
                       '/404',
                       '/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
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
