import React from 'react'
import Header from '.'

describe('Header.cy.ts', () => {
    it('renders', () => {
        cy.mount(<Header />)
        cy.get('img').should('exist')
    })
})
export {}
