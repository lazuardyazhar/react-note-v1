import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import { login } from '../utils/network';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const result = await login(data);
      if (!result.error) {
        localStorage.setItem('accessToken', result.data.token);
        navigate('/');
      } else {
        alert(result.error.message);
      }
    } catch (error) {
      alert('Terjadi kesalahan saat melakukan login');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
