import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Note App</h1>
        <nav>
          <Link href="/">
            <a className="mr-4">Home</a>
          </Link>
          <Link href="/notes">
            <a>Notes</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}