import {describe, expect, it} from '@jest/globals'
import { treesDecoder } from '../decoders'
import { apiResponsePayload } from '../../fixtures/apiResponsePayload'

describe('treesDecoder', () => {
  it('should decode response from api', () => {
    const result = treesDecoder.run(apiResponsePayload)
    expect(result).toMatchSnapshot()
  })
  
  it('should fail for invalid data', () => {
    const result = treesDecoder.run({trees: [{}]})
    expect(result).toMatchSnapshot()
  })
})
