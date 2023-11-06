import Note from "./Note";
const notes = [
    {
        title: "Belajar React",
        createdAt: "12 Nov 2022",
        body: "Belajar membuat component di React."
      },
      {
        title: "Belajar Tailwind",
        createdAt: "13 Nov 2022",
        body: "Belajar styling menggunakan Tailwind CSS."
      },
      {
        title: "Belajar Vite",
        createdAt: "14 Nov 2022",
        body: "Belajar menginstall Vite."
      }
]
function NoteList() {
    return(
        <div className="px-4  py-8 animate-slide-up">
            <h1 className="perspective text-3xl font-bold text-center transition-all duration-500 hover:-translate-y-2">
                Daftar catatan
                </h1>
            <div className="grid grid-cols-3 gap-8">
                {notes.map((note) => (
                    <Note
                    key={note.title}
                    title={note.title}
                    createdAt={note.createdAt}
                    body={note.body}
                    />
                ))}
            </div>
        </div>
    )
}
export default NoteList