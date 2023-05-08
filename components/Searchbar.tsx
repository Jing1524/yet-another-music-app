import { useState } from 'react'
import { useRouter } from 'next/router'
import { FiSearch } from 'react-icons/fi'

const Searchbar = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    router.push(`/search/${searchTerm}`)
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="serach-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row items-center justify-start">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          type="search"
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-4 text-base placeholder-gray-500 bg-transparent border-none outline-none"
        />
      </div>
    </form>
  )
}

export default Searchbar
