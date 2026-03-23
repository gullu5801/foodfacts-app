import { configureStore } from "@reduxjs/toolkit"
import savedReducer from "./savedSlice"

/* 🔹 Create Store */
const store = configureStore({
  reducer: {
    saved: savedReducer
  }
})

/* 🔹 Persist to localStorage on every change */
store.subscribe(() => {
  try {
    const state = store.getState()

    localStorage.setItem(
      "foodfacts-saved",
      JSON.stringify(state.saved.items)
    )
  } catch (error) {
    // Fail silently (localStorage may be full or unavailable)
    console.error("Storage error:", error)
  }
})

export default store