import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const NoteContext = createContext()
const initialNotes = [
    { title: 'My Note-v2', 
      createdAt: '11/11/2023', 
      body: 'ini menggunakan react,vite dan tailwindcss' 
    },
    { title: 'lorem ipsum', 
      createdAt: '27/11/2023', 
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa mauris, rutrum et efficitur quis, congue quis tortor. Maecenas non diam feugiat, mattis magna non, vestibulum orci. Nulla sit amet iaculis lorem. Suspendisse ut semper metus, aliquam gravida libero. Ut enim leo, iaculis ut sodales ac, pretium nec lectus. Praesent justo diam, lobortis viverra placerat nec, faucibus ut mauris. In tempus id turpis quis pretium. Donec eu nisl a leo ullamcorper egestas in in mi. Cras pretium sodales lorem, vitae commodo quam. Nunc dapibus, ante vitae rutrum elementum, libero metus pellentesque justo, ut vulputate est nisi vel turpis. Nam id mi congue, accumsan nunc a, scelerisque tellus. Aenean sed porta sapien.' 
    },
  ];
const noteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
        return [...state, action.payload];
    case 'DELETE_NOTE':
        return state.filter((_, index) => index !== action.payload);
    case 'SET_NOTES':
        return action.payload;
    default:
      return state
  }
}
export const NoteProvider = ({ children }) => {
    const [notes, dispatch] = useReducer(noteReducer, initialNotes)
    const resetNotes = () => {
      dispatch({ type: 'SET_NOTES', payload: initialNotes })
    } 
    return (
      <NoteContext.Provider value={{ notes, dispatch, resetNotes }}>
        {children}
      </NoteContext.Provider>
    )
  }

NoteProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }
export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNoteContext must be used within a NoteProvider')
  }
  return context;
}
