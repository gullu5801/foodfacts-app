import { useSelector, useDispatch } from "react-redux"
import { removeItem } from "../store/savedSlice"
import { useNavigate } from "react-router-dom"

import Container from "@mui/material/Container"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

function SavedPage() {
  const saved = useSelector((state) => state.saved.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Saved Items
      </Typography>

      {saved.map((p) => (
        <Card key={p.code} sx={{ mt: 2, p: 1 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",

                /* 🔥 RESPONSIVE FIX */
                flexDirection: { xs: "column", sm: "row" }
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={p.image_small_url}
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: "contain"
                }}
              />

              {/* TEXT */}
              <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
                <Typography fontWeight={600}>
                  {p.product_name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {p.brands}
                </Typography>
              </Box>

              {/* BUTTONS */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1,

                  /* 🔥 STACK ON MOBILE */
                  flexDirection: { xs: "column", sm: "row" },
                  width: { xs: "100%", sm: "auto" }
                }}
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() =>
                    navigate(`/product/${p.code}`, {
                      state: { product: p }
                    })
                  }
                >
                  View
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={() => dispatch(removeItem(p.code))}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default SavedPage