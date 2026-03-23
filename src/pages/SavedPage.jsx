import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { removeItem } from "../store/savedSlice"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility"

function SavedPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const savedItems = useSelector((state) => state.saved.items)

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight={700}>
        Saved Items
      </Typography>

      {/* Empty State */}
      {savedItems.length === 0 ? (
        <Typography color="text.secondary" sx={{ mt: 3 }}>
          No saved items yet. Go search and add some ⭐
        </Typography>
      ) : (
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {savedItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.product_name || "Unknown Product"}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.brands || "Unknown Brand"}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  {/* View Button */}
                  <Button
                    size="small"
                    startIcon={<VisibilityIcon />}
                    onClick={() =>
                      navigate(`/product/${item.id}`, {
                        state: { product: item }
                      })
                    }
                  >
                    View
                  </Button>

                  {/* Remove Button */}
                  <Button
                    size="small"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default SavedPage