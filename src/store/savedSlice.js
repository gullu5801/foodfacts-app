import { createSlice } from "@reduxjs/toolkit"

/* 🔹 Load saved items from localStorage */
const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem("foodfacts-saved")
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const savedSlice = createSlice({
  name: "saved",

  initialState: {
    items: loadFromStorage()
  },

  reducers: {
    /* ➕ ADD ITEM */
    addItem: (state, action) => {
      const exists = state.items.some(
        (item) => item.id === action.payload.id
      )

      if (!exists) {
        state.items.push(action.payload)
      }
    },

    /* ❌ REMOVE ITEM */
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    }
  }
})

/* Export actions */
export const { addItem, removeItem } = savedSlice.actions

/* Export reducer */
export default savedSlice.reducer