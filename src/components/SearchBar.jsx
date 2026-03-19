import { useState } from "react"

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) {
      setError("Please enter a search term")
      return
    }

    setError("")
    onSearch(query)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a food... e.g. banana, oats"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </>
  )
}

export default SearchBar