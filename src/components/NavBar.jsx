import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Badge from "@mui/material/Badge"
import Box from "@mui/material/Box"

import BookmarkIcon from "@mui/icons-material/Bookmark"

import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

function NavBar() {
  const savedCount = useSelector((state) => state.saved.items.length)

  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo / Title */}
        <Typography variant="h6" fontWeight={800}>
          🥗 FoodFacts
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          {/* Search */}
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            sx={{
              "&.active": {
                borderBottom: "2px solid white"
              }
            }}
          >
            Search
          </Button>

          {/* Saved */}
          <Button
            color="inherit"
            component={NavLink}
            to="/saved"
            startIcon={
              <Badge
                badgeContent={savedCount}
                color="secondary"
                invisible={savedCount === 0}
              >
                <BookmarkIcon />
              </Badge>
            }
            sx={{
              "&.active": {
                borderBottom: "2px solid white"
              }
            }}
          >
            Saved
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar