import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Badge from "@mui/material/Badge"

import BookmarkIcon from "@mui/icons-material/Bookmark"

function NavBar() {
  const savedCount = useSelector((state) => state.saved.items.length)

  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        width: "100%",
        left: 0,
        right: 0
      }}
    >
      {/* 🔥 FULL WIDTH TOOLBAR */}
      <Toolbar
        sx={{
          minHeight: "72px",          // 🔥 bigger height
          px: { xs: 2, md: 6 },      // responsive padding
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {/* LOGO */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >
          🍏 FoodFacts
        </Typography>

        {/* NAV LINKS */}
        <Box sx={{ display: "flex", gap: 3 }}>
          
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            sx={{
              fontWeight: 600,
              fontSize: "16px",
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
              fontSize: "16px",
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
    </AppBar>
  )
}

export default NavBar