import AppRouter from './AppRouter';
import { NoteProvider } from './contexts/NoteContext';

function App() {
  return (
    <NoteProvider>
      <div className="App">
        <AppRouter />
      </div>
    </NoteProvider>
  )
}

export default App

