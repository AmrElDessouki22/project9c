import NoteList from '@/components/notes/NoteList'

export default function NotesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Notes</h1>
      <NoteList />
    </div>
  )
}