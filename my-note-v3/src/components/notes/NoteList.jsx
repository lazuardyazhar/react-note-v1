import PropTypes from 'prop-types'
import Note from './Note';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div >
      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default NoteList;
