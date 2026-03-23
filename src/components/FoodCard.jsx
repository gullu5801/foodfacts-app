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
        height: 240, // 🔥 fixed height for all cards
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 3,
        p: 2,
        cursor: "pointer",
        transition: "0.2s",
        boxShadow: 2,
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-4px)"
        }
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          height: 110, // 🔥 fixed image area
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          component="img"
          src={
            product.image_small_url ||
            "https://via.placeholder.com/100"
          }
          alt={product.product_name}
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain"
          }}
        />
      </Box>

      {/* TEXT */}
      <CardContent sx={{ p: 0 }}>
        <Typography
          fontWeight={600}
          sx={{
            fontSize: "14px",
            textAlign: "center",
            display: "-webkit-box",
            WebkitLineClamp: 2, // 🔥 limit title lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {product.product_name || "Unknown Product"}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "center",
            fontSize: "12px",
            mt: 0.5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {product.brands || "Unknown Brand"}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default FoodCard