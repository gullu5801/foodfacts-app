import { useState } from "react"
import SearchBar from "./components/SearchBar"
import FoodList from "./components/FoodList"

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (query) => {
    if (!query) return

    setLoading(true)
    setHasSearched(true)

    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
          query
        )}&search_simple=1&action=process&json=1`
      )

      const data = await response.json()

      const filtered = data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== ""
      )

      setResults(filtered.slice(0, 12)) // limit results
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>FoodFacts 🍎</h1>

      <SearchBar onSearch={handleSearch} />

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Initial state */}
      {!loading && !hasSearched && (
        <p>Search for a food to see nutrition info 👆</p>
      )}

      {/* No results */}
      {!loading && hasSearched && results.length === 0 && (
        <p>No results found ❌</p>
      )}

      {/* Results */}
      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  )
}

export default App