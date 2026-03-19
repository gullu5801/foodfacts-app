import SearchBar from "../components/SearchBar"
import FoodList from "../components/FoodList"
import useFoodSearch from "../hooks/useFoodSearch"
import ErrorMessage from "../components/ErrorMessage"

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch()

  return (
    <div className="page">
      <h2>Search Nutrition Info</h2>

      <SearchBar onSearch={searchFood} />

      {loading && <p>Loading...</p>}

      {error && <ErrorMessage message={error} />}

      {!loading && results.length === 0 && (
        <p>🔍 Start searching for food like banana or oats</p>
      )}

      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  )
}

export default HomePage