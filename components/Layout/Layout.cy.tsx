import React from 'react'
import Layout from '.'

describe('Layout.cy.ts', () => {
    it('renders children', () => {
        cy.mount(
            <Layout>
                <div>children</div>
            </Layout>
        )

        cy.get('div').should('exist')
    })
})
export {}
