import PropTypes from 'prop-types'

const Note = ({ note, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6">
      <h3 className="text-xl font-bold mb-3">{note.title}</h3>
      <p className="text-gray-500 text-sm mb-3">{note.createdAt}</p>
      <p className="text-gray-700">{note.body}</p>
      <button
        onClick={onDelete}
        className="mt-4 bg-[#C8AE7D] text-white py-2 px-4 rounded hover:bg-[#8B4513] transition duration-300"
      >
        Hapus
      </button>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Note
