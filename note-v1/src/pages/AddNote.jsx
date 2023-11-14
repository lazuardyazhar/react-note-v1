import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNoteContext } from '../contexts/NoteContext';

const AddNote = () => {
  const { dispatch } = useNoteContext()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [isSubmitDisabled, setSubmitDisabled] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    setSubmitDisabled(!(title.trim() && body.trim()))
  }, [title, body])

  const handleAddNote = () => {
    const newNote = { title, body, createdAt: new Date().toLocaleDateString() }
    dispatch({ type: 'ADD_NOTE', payload: newNote })
    navigate('/')
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Tambah Catatan</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Judul Catatan:</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Isi Catatan:</label>
          <textarea
            className="border p-2 w-full"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleAddNote}
          className={`bg-[#706230] text-white py-2 px-4 rounded hover:bg-[#917153] transition duration-300 ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitDisabled}
        >
          Tambah Catatan
        </button>
      </form>
    </div>
  )
}

export default AddNote;
