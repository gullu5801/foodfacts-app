import { useSelector, useDispatch } from "react-redux"
import { removeItem } from "../store/savedSlice"
import { useNavigate } from "react-router-dom"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility"

function SavedPage() {
  const saved = useSelector((state) => state.saved.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight={700}>
        Saved Items
      </Typography>

      {saved.length === 0 ? (
        <Typography color="text.secondary">
          No saved items yet.
        </Typography>
      ) : (
        saved.map((product) => (
          <Card
            key={product.id}
            sx={{
              mb: 3,
              borderRadius: 3,
              boxShadow: 3,
              transition: "0.2s",
              "&:hover": {
                boxShadow: 6,
                transform: "translateY(-2px)"
              }
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                
                {/* 🔥 IMAGE */}
                <Box
                  component="img"
                  src={
                    product.image_small_url ||
                    "https://via.placeholder.com/100"
                  }
                  alt={product.product_name}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: "contain",
                    borderRadius: 2,
                    backgroundColor: "#f5f5f5",
                    p: 1
                  }}
                />

                {/* TEXT */}
                <Box sx={{ flex: 1 }}>
                  <Typography fontWeight={600}>
                    {product.product_name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {product.brands}
                  </Typography>
                </Box>

                {/* ACTIONS */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="outlined"
                    color="success"
                    startIcon={<VisibilityIcon />}
                    onClick={() =>
                      navigate(`/product/${product.id}`)
                    }
                  >
                    View
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() =>
                      dispatch(removeItem(product.id))
                    }
                  >
                    Remove
                  </Button>
                </Box>

              </Box>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  )
}

export default SavedPage