'use client'

import { useState } from 'react'
import { useNotes } from '@/contexts/NotesContext'
import Input from '../ui/Input'
import Button from '../ui/Button'

export default function AddNoteForm() {
  const { addNote } = useNotes()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && content) {
      addNote({ title, content })
      setTitle('')
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
        className="mb-2 w-full"
      />
      <Input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note content"
        className="mb-2 w-full"
      />
      <Button type="submit" className="bg-blue-500 text-white">
        Add Note
      </Button>
    </form>
  )
}