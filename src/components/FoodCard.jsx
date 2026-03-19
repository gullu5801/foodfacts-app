import { useNavigate } from "react-router-dom"

function FoodCard({ product }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.code}`)
  }

  return (
    <div className="food-card" onClick={handleClick}>
      <img
        src={product.image_small_url || "https://via.placeholder.com/150"}
        alt={product.product_name}
      />

      <h2>{product.product_name}</h2>
      <p>{product.brands}</p>
    </div>
  )
}

export default FoodCard