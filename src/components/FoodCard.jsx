function FoodCard({ product }) {
  const { product_name, brands, nutriments, image_small_url } = product

  return (
    <div className="food-card">

    {/* render the product image if it exists */}
      <img
        src={image_small_url || "https://via.placeholder.com/100"}
        alt={product_name}
      />
    {/* render the product name */}
      <h2>{product_name || "Unknown Product"}</h2>

    {/* render the brand */}
      <p>{brands || "No Brand"}</p>
      
    {/* render calories, protein, carbs, fat from nutriments */}
      <p>Calories: {nutriments?.["energy-kcal_100g"] || 0} kcal</p>
      <p>Protein: {nutriments?.proteins_100g || 0} g</p>
      <p>Carbs: {nutriments?.carbohydrates_100g || 0} g</p>
      <p>Fat: {nutriments?.fat_100g || 0} g</p>
    </div>
  )
}

export default FoodCard