import { Link } from 'react-router-dom'
import { useState } from 'react'
import Note from '../components/Note'
import { useNoteContext } from '../contexts/NoteContext'

const Home = () => {
  const { notes, dispatch, resetNotes } = useNoteContext()
  const [searchTitle, setSearchTitle] = useState('')

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_NOTE', payload:index})
  }

  const handleSearch = ()=>{
    if (searchTitle === '') {
      resetNotes();
    } else {
      const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTitle.toLowerCase())
      )
      dispatch({ type: 'SET_NOTES', payload: filteredNotes });
    }
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold mb-2 animate-tilt border-daftar-catatan">Daftar Catatan</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Cari berdasarkan judul"
            className="border p-2 rounded-md"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button onClick={handleSearch} className="bg-[#B0926A] text-white py-2 px-4 ml-2 transition duration-300 hover:bg-[#917153] rounded-md">
            Cari
          </button>
        </div>
      </div>
      <div>
        {notes.map((note, index) => (
          <Note key={index} note={note} onDelete={() => handleDelete(index)} />
        ))}
      </div>
      <div className="mt-4">
        <Link to="/add" className="bg-[#706230] text-white py-2 px-4 rounded hover:bg-[#917153] transition duration-300">
          Tambah Catatan
        </Link>
      </div>
    </div>
  )
}

export default Home;
