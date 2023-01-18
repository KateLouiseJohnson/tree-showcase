import {describe, expect, it} from '@jest/globals'
import { fetchTrees } from '../fetchTrees'
import { apiResponsePayload } from '../../fixtures/apiResponsePayload'

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(apiResponsePayload),
//   })
// )

const fetchMock = jest.fn()
global.fetch = fetchMock

describe('fetchTrees', () => {
  it('should fetch trees and dispatch success', async () => {
    fetchMock.mockImplementationOnce(() =>
      Promise.resolve({
            json: () => Promise.resolve(apiResponsePayload),
          })
        )
    const mockedDispatch = jest.fn()
    await fetchTrees(mockedDispatch)
    expect(mockedDispatch).toMatchSnapshot()
  })
  
  it('should handle exception', async () => {
    fetchMock.mockImplementationOnce(() => Promise.reject('FAILURE'))
    const mockedDispatch = jest.fn()
    await fetchTrees(mockedDispatch)
    expect(mockedDispatch).toMatchSnapshot()
  })
})