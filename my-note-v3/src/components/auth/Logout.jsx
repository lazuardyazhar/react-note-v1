import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); 
    navigate('/login')

    if (onLogout) {
      onLogout()
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-[#0070f3] text-white p-2 rounded-md"
    >
      Logout
    </button>
  )
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func,
};

export default LogoutButton;
