// src/pages/Home.js
import  {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteList from '../components/notes/NoteList';
import { getNotes, deleteNote } from '../utils/network'

const Home = () => {
  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNotes();
        if (!result.error) {
          setNotes(result.data);
        } else {
          console.error(`Error fetching notes: ${result.code}`)
        }
      } catch (error) {
        console.error(`Error fetching notes: ${error.message}`)
      }
    };

    fetchData()
  }, [])

  const handleDeleteNote = async (id) => {
    try {
      const result = await deleteNote(id);
      if (!result.error) {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
      } else {
        console.error(`Error deleting note: ${result.code}`);
      }

    } catch (error) {
      console.error(`Error deleting note: ${error.message}`)
    }
  }

  const handleAddNote = () => {
    navigate('/add-note')
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
    const handleSearch = (searchValue) => {
    setSearchTerm(searchValue)
  }
  return (
    <div className="max-w-lg mx-auto my-8">
      <h1 className="text-2xl  font-bold mb-4">Home</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>
      <NoteList notes={filteredNotes} onDelete={handleDeleteNote} onSearch={handleSearch} />
      <button onClick={handleAddNote} className="bg-blue-500 text-white p-2 rounded-md">
        Add Note
      </button>
    </div>
  );
};

export default Home
