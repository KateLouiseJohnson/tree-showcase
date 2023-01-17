import { setTreesFetching, setTreesFetchedSuccess, setTreesFetchedFailure } from './treeShowcaseSlice'
import { TREES_API_URL } from './constants'
import { Dispatch } from './types'
import { treesDecoder } from './decoders'

export const fetchTrees = async (dispatch: Dispatch) => {
  dispatch(setTreesFetching())
  await fetch(TREES_API_URL)
  .then((response) => response.json())
  .then((data) => {
    const decodedData = treesDecoder.run(data)
    if (decodedData.type === 'FAIL') {
      dispatch(setTreesFetchedFailure())
      console.log('Decoding error:', decodedData.error) // Better handled by a backend and logged
    } else {
      dispatch(setTreesFetchedSuccess(decodedData.value.trees))
    }
  })
  .catch((err) => {
    dispatch(setTreesFetchedFailure())
    console.log(err.message)
  })
}
