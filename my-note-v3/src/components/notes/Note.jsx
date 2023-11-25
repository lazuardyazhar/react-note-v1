import PropTypes from 'prop-types';

const Note = ({ note, onDelete }) => {
  const createdAt = new Date(note.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-4 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold mb-4">{note.title}</h2>
      <p className="text-gray-600">{note.body}</p>
      <p className="text-gray-500 mt-2">{createdAt}</p>
        <div className="mt-6 flex justify-end">
          <button
          onClick={() => onDelete(note.id)}
          className="text-red-500 hover:text-red-700 hover:underline font-bold focus:outline-none transition duration-300">
         Delete
         </button>
        </div>
    </div>
  );
};


Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;
