import { useNavigate } from "react-router-dom"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

function FoodCard({ product }) {
  const navigate = useNavigate()

  return (
    <Card
      onClick={() =>
        navigate(`/product/${product.code}`, {
          state: { product }
        })
      }
      sx={{
        cursor: "pointer",
        p: 2,
        textAlign: "center",
        "&:hover": { boxShadow: 6 }
      }}
    >
      <Box
        component="img"
        src={
          product.image_small_url ||
          "https://via.placeholder.com/100"
        }
        sx={{ height: 100, objectFit: "contain", mb: 1 }}
      />

      <CardContent>
        <Typography fontWeight={600}>
          {product.product_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brands}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default FoodCard