import { useNavigate } from "react-router-dom"

function SavedPage({ saved, dispatch }) {
  const navigate = useNavigate()

  return (
    <div className="page saved-container">
      <h2>Saved Items</h2>

      {saved.length === 0 ? (
        <p>No saved items yet ⭐</p>
      ) : (
        saved.map((item) => (
          <div key={item.code} className="saved-item">
            <h3>{item.product_name}</h3>

            <div className="saved-actions">
              <button onClick={() => navigate(`/product/${item.code}`)}>
                View
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "REMOVE", code: item.code })
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default SavedPage