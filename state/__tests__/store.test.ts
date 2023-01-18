import {describe, expect, it} from '@jest/globals'
import store from '../store'
import { serialisedTrees } from '../../fixtures'
import { setTreesFetching, setTreesFetchedSuccess, setTreesFetchedFailure } from '../treeShowcaseSlice'

describe('Tree showcase state test', () => {
  it('should set initial state', async () => {
    const state = store.getState()
    expect(state).toMatchSnapshot()
  })

  it('should set loading', async () => {
    const state = store.dispatch(setTreesFetching())
    expect(state).toMatchSnapshot()
    expect(store.getState()).toMatchSnapshot()
  })

  it('should set failed', async () => {
    const state = store.dispatch(setTreesFetchedFailure())
    expect(state).toMatchSnapshot()
    expect(store.getState()).toMatchSnapshot()
  })

  it('should set success', async () => {
    const state = store.dispatch(setTreesFetchedSuccess(serialisedTrees))
    expect(state).toMatchSnapshot()
    expect(store.getState()).toMatchSnapshot()
  })
})