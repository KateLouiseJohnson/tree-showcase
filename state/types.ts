import { Tree } from '../types'
import { default as store } from './store'

export type TreeShowcaseState = {
  fetching: boolean,
  success: boolean,
  failure: boolean,
  trees: Tree[],
}

export type Store = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch