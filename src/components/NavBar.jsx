import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Badge from "@mui/material/Badge"
import Container from "@mui/material/Container"

import BookmarkIcon from "@mui/icons-material/Bookmark"

function NavBar() {
  const savedCount = useSelector((state) => state.saved.items.length)

  return (
    <AppBar position="sticky" elevation={2}>
      {/* 🔥 FULL WIDTH BAR */}
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          
          {/* LOGO */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: 0.5
            }}
          >
            🍏 FoodFacts
          </Typography>

          {/* NAV LINKS */}
          <Box sx={{ display: "flex", gap: 2 }}>
            
            <Button
              color="inherit"
              component={NavLink}
              to="/"
              sx={{
                fontWeight: 600,
                "&.active": {
                  borderBottom: "2px solid white"
                }
              }}
            >
              Search
            </Button>

            <Button
              color="inherit"
              component={NavLink}
              to="/saved"
              sx={{
                fontWeight: 600,
                "&.active": {
                  borderBottom: "2px solid white"
                }
              }}
            >
              <Badge badgeContent={savedCount} color="error">
                <BookmarkIcon />
              </Badge>
            </Button>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar