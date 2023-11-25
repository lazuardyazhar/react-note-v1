
import { useNavigate } from 'react-router-dom';
import AddNoteForm from '../components/notes/AddNoteForm';
import { addNote } from '../utils/network';

const AddNote = () => {
  const navigate = useNavigate();

  const handleAddNote = async (data) => {
    try {
        const result = await addNote(data);

        if (!result.error) {
          navigate('/');
        }else{
            console.error(result.error);
        }

    } catch (error) {
        console.error('Error adding note:', error);
    }
  
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Add Note</h1>
      <AddNoteForm onSubmit={handleAddNote} />
    </div>
  );
};

export default AddNote;
