import { configureStore } from '@reduxjs/toolkit'
import reducer from './treeShowcaseSlice'

export default configureStore({
  reducer: {
    treeShowcase: reducer,
  }
})