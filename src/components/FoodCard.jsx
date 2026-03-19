import { useNavigate } from "react-router-dom"

export default function FoodCard({ product }) {
  const navigate = useNavigate()

  return (
    <div
      className="food-card"
      onClick={() => navigate(`/product/${product.code}`)}
    >
      <img
        src={product.image_small_url || "https://via.placeholder.com/150"}
        alt={product.product_name}
      />

      <h2>{product.product_name}</h2>
      <p>{product.brands}</p>
    </div>
  )
}