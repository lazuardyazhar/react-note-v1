import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleRegister = (data) => {
    onSubmit(data);
  };

  return (
    <form className="max-w-md mx-auto my-8" onSubmit={handleSubmit(handleRegister)}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
        <input
          type="text"
          id="username"
          {...register('username', { required: 'Username is required' })}
          className="w-full p-2 border rounded-md"
        />
        {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
          className="w-full p-2 border rounded-md"
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      <div>
        <button type="submit" className="bg-green-500 text-white p-2 rounded-md">Register</button>
      </div>
    </form>
  );
};
RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
export default RegisterForm;