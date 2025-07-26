import { useNotes } from '@/contexts/NotesContext'
import NoteItem from './NoteItem'

export default function NoteList() {
  const { notes } = useNotes()

  return (
    <div className="space-y-2">
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  )
}