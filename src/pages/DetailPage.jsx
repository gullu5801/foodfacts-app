import { useEffect, useState } from "react"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addItem, removeItem } from "../store/savedSlice"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"

function DetailPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { barcode } = useParams()

  const dispatch = useDispatch()
  const savedItems = useSelector((state) => state.saved.items)

  const [product, setProduct] = useState(
    location.state?.product
      ? { ...location.state.product, id: location.state.product.code }
      : null
  )

  const [loading, setLoading] = useState(!product)

  useEffect(() => {
    if (!product) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(
            `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
          )
          const data = await res.json()

          if (data.status === 1) {
            setProduct({
              ...data.product,
              id: data.product.code
            })
          } else {
            setProduct(null)
          }
        } catch (err) {
          console.error(err)
          setProduct(null)
        } finally {
          setLoading(false)
        }
      }

      fetchProduct()
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
        <Typography variant="h6">Product not found.</Typography>
        <Button onClick={() => navigate("/")}>← Back to Search</Button>
      </Container>
    )
  }

  const isSaved = savedItems.some((item) => item.id === product.id)

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4">{product.product_name}</Typography>
      <Typography>{product.brands}</Typography>

      <Button
        onClick={() =>
          isSaved
            ? dispatch(removeItem(product.id))
            : dispatch(addItem(product))
        }
      >
        {isSaved ? "Remove" : "Save"}
      </Button>
    </Container>
  )
}

export default DetailPage