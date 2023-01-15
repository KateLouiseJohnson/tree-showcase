import { createSlice } from '@reduxjs/toolkit'
import { TreeShowcaseState } from './types'

export const initialState: TreeShowcaseState = {
  fetching: false,
  success: false,
  failure: false,
  trees: [],
}

const treesSlice = createSlice({
  name: 'treeShowcase',
  initialState: initialState,
  reducers: {
    setTreesFetching(state) {
      state.success = false
      state.failure = false
      state.fetching = true
    },
    setTreesFetchedSuccess(state, action) {
      state.trees = action.payload
      state.success = true
      state.failure = false
      state.fetching = false
    },
    setTreesFetchedFailure(state) {
      state.success = false
      state.failure = true
      state.fetching = false
    }
  }
})

export const { setTreesFetching, setTreesFetchedSuccess, setTreesFetchedFailure } = treesSlice.actions
export default treesSlice.reducer
