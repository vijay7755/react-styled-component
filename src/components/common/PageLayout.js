import React from 'react'
import styled from 'styled-components'

import { Header } from 'components/common'

const Content = styled.main`
    max-width: 800px;
    margin: 80px auto 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
    font-family: ${p => p.theme.contentFont};
    
    h1, h2, h3, h4, h5, h6 {
        font-family: ${p => {
            console.log("p: ", p)
            const { headingFont } = p.theme
            return `${headingFont}`
    }}
    }
`

export const PageLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Content>
                {children}
            </Content>
        </>
    )
}