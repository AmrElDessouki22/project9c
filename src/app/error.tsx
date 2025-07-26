'use client'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h2 className="text-red-500">Something went wrong!</h2>
        <button onClick={() => reset()} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Try again
        </button>
      </div>
    </div>
  )
}