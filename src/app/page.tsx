import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import NoteList from '@/components/notes/NoteList'
import AddNoteForm from '@/components/notes/AddNoteForm'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <AddNoteForm />
        <NoteList />
      </main>
      <Footer />
    </div>
  )
}