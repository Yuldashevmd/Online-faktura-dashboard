import { configureStore } from '@reduxjs/toolkit'
import { getUser } from './getUser'

export const store =configureStore({
  name:'store',
  reducer:{
    [getUser.reducerPath]:getUser.reducer
  },

  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(getUser.middleware)
})