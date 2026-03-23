import useFoodSearch from "../hooks/useFoodSearch"
import SearchBar from "../components/SearchBar"
import FoodCard from "../components/FoodCard"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch()

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      
      {/* HEADER */}
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Search Nutrition Info
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Type any food name to see its nutrition facts.
      </Typography>

      {/* SEARCH */}
      <SearchBar onSearch={searchFood} />

      {/* STATES */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {!loading && results.length === 0 && (
        <Typography sx={{ mt: 3, textAlign: "center" }}>
          Start searching for food 🍎
        </Typography>
      )}

      {/* GRID */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {results.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3} // 🔥 4 per row desktop
            key={product.code}
          >
            <FoodCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default HomePage