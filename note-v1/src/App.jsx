import NoteList from "./components/NoteList";
function App(){
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow py-4">
        <h1 className="text-2xl font-bold text-center">Note App</h1>
      </nav>
      <NoteList/>
    </div>
  )
}
export default App