import { useNotes } from '@/contexts/NotesContext'

interface NoteItemProps {
  note: {
    id: string
    title: string
    content: string
  }
}

export default function NoteItem({ note }: NoteItemProps) {
  const { deleteNote } = useNotes()

  return (
    <div className="border border-gray-200 p-4 rounded-md shadow-sm">
      <h3 className="font-bold text-lg">{note.title}</h3>
      <p className="text-gray-700 mt-2">{note.content}</p>
      <button
        onClick={() => deleteNote(note.id)}
        className="mt-4 text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  )
}