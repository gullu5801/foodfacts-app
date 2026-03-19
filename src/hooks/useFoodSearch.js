import { useState } from "react"
import axios from "axios"

function useFoodSearch() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchFood = async (query) => {
    setLoading(true)
    setError(null)

    try {
      const res = await axios.get(
        "https://world.openfoodfacts.org/cgi/search.pl",
        {
          params: {
            search_terms: query,
            search_simple: 1,
            action: "process",
            json: 1,
          },
        }
      )

      const filtered = res.data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== ""
      )

      setResults(filtered.slice(0, 12))
    } catch (err) {
      if (err.response) setError("Server error")
      else if (err.request) setError("No internet connection")
      else setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return { results, loading, error, searchFood }
}

export default useFoodSearch