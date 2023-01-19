import { TREES_API_URL } from '../../state/constants'
import { apiResponsePayload } from '../../fixtures'

describe('Happy path', () => {
  // These tests are a bit hacky having created this with react-native
  beforeEach(() => {
    cy.intercept(TREES_API_URL, apiResponsePayload).as('HappyPath')
    cy.visit('/')
  })
  
  it('loads trees', () => {
    const cards = cy.get('[id=card]')
    cards.should('have.length', 5)
    cards.contains('Reveal')
  })
  
  it('reveals tree on button click', () => {
    // Would be good to test the blur as well, didn't have time to figure it out
    const firstButton = cy.contains('Reveal')
    firstButton.click()
    firstButton.contains('Hide')
  })
})
