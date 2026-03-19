import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function DetailPage({ saved, dispatch }) {
  const { barcode } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        )

        if (!cancelled) {
          setProduct(res.data.product)
          setLoading(false)
        }
      } catch {
        setLoading(false)
      }
    }

    fetchData()
    return () => (cancelled = true)
  }, [barcode])

  if (loading) return <p>Loading...</p>

  const isSaved = saved.some((p) => p.code === barcode)

  return (
    <div className="page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-card">
        <img
          className="detail-image"
          src={product.image_small_url || "https://via.placeholder.com/150"}
        />

        <div className="detail-info">
          <h2>{product.product_name}</h2>
          <p>{product.brands}</p>

          <p>🔥 Calories: {product.nutriments?.["energy-kcal_100g"]}</p>
          <p>💪 Protein: {product.nutriments?.proteins_100g}</p>
          <p>🍞 Carbs: {product.nutriments?.carbohydrates_100g}</p>
          <p>🧈 Fat: {product.nutriments?.fat_100g}</p>

          <div className="detail-actions">
            <button
              onClick={() =>
                dispatch({
                  type: isSaved ? "REMOVE" : "ADD",
                  product,
                  code: barcode,
                })
              }
            >
              {isSaved ? "Remove" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage