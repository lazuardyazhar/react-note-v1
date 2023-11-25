import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const AddNoteForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAddNote = (data) => {
    onSubmit(data);
  };

  return (
    <form className="max-w-md mx-auto my-8" onSubmit={handleSubmit(handleAddNote)}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'Title is required' })}
          className="w-full p-2 border rounded-md"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="body" className="block text-gray-700 text-sm font-bold mb-2">Body:</label>
        <textarea
          id="body"
          {...register('body', { required: 'Body is required' })}
          className="w-full p-2 border rounded-md"
        />
        {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body.message}</p>}
      </div>

      <div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Add Note</button>
      </div>
    </form>
  );
};
AddNoteForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
export default AddNoteForm;
