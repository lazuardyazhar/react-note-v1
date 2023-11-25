import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logout from './auth/Logout';
import { getUserLogged } from '../utils/network';

const Header = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const result = await getUserLogged()
        if (!result.error) {
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
      } catch (error) {
        console.error('Error checking login status:', error.message)
        setIsLoggedIn(false)
      }
    }

    checkLoginStatus()
  }, [])
  const handleLogin = () => {
    navigate('/login')
  }
  const handleRegister = () => {
    navigate('/register')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <nav className="bg-[#6499E9] p-4">
      <div className="flex items-center justify-between">
        <div className="text-white">
          <Link to="/" className="text-xl font-bold hover:text-yellow-400 transition duration-300">
            My Notes App
          </Link>
        </div>
        <div className="space-x-4">
          {isLoggedIn ? (
            <Logout onLogout={handleLogout} />
          ) : (
            <>
              <button onClick={handleLogin} className="text-white">
                Login
              </button>
              <button onClick={handleRegister} className="text-white">
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header;
