import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import { register } from '../utils/network';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
        const result = await register(data);

        if (!result.error) {
          localStorage.setItem('accessToken', result.data.token);
          navigate('/');
        }else {
        alert(result.error.message);
        }
    } catch (error) {
        alert('Terjadi kesalahan saat melakukan login');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
