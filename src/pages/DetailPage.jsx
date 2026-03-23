import { useEffect, useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../store/savedSlice"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import CircularProgress from "@mui/material/CircularProgress"

function DetailPage() {
  const { barcode } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const dispatch = useDispatch()
  const saved = useSelector((state) => state.saved.items)

  const [product, setProduct] = useState(location.state?.product || null)
  const [loading, setLoading] = useState(!product)

  useEffect(() => {
    if (!product) {
      fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 1) {
            setProduct({
              ...data.product,
              id: data.product.code
            })
          }
        })
        .finally(() => setLoading(false))
    }
  }, [barcode])

  if (loading) {
    return (
      <Container sx={{ py: 4, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    )
  }

  if (!product) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography>Product not found</Typography>
        <Button onClick={() => navigate("/")}>Back</Button>
      </Container>
    )
  }

  const isSaved = saved.some((p) => p.id === product.id)

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      
      <Button onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Paper sx={{ p: 3, borderRadius: 3 }}>
        
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          
          {/* IMAGE */}
          <Box
            component="img"
            src={
              product.image_url ||
              "https://via.placeholder.com/200"
            }
            alt={product.product_name}
            sx={{
              width: 200,
              height: 200,
              objectFit: "contain",
              borderRadius: 2,
              backgroundColor: "#f5f5f5",
              p: 1
            }}
          />

          {/* INFO */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              {product.product_name}
            </Typography>

            <Typography color="text.secondary" gutterBottom>
              {product.brands}
            </Typography>

            <Button
              variant={isSaved ? "outlined" : "contained"}
              color={isSaved ? "error" : "primary"}
              onClick={() =>
                isSaved
                  ? dispatch(removeItem(product.id))
                  : dispatch(addItem(product))
              }
              sx={{ mt: 2 }}
            >
              {isSaved ? "Remove" : "Save"}
            </Button>
          </Box>

        </Box>

        {/* NUTRITION */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Nutrition</Typography>

          <Typography>
            Calories: {product.nutriments?.["energy-kcal_100g"]} kcal
          </Typography>
          <Typography>
            Protein: {product.nutriments?.proteins_100g} g
          </Typography>
          <Typography>
            Carbs: {product.nutriments?.carbohydrates_100g} g
          </Typography>
          <Typography>
            Fat: {product.nutriments?.fat_100g} g
          </Typography>
        </Box>

      </Paper>
    </Container>
  )
}

export default DetailPage