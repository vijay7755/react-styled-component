/*
  conveting to styled-components from sass link:
    https://medium.com/styled-components/getting-sassy-with-sass-styled-theme-9a375cfb78e8

  This article also contain multiple tips for using styled-component
  like using variables, themeing, varients, etc
  Very useful article
 */

import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from 'components/pages/Home'
import Login from 'components/pages/Login'
import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'
import generalVariables from 'themes/generalVariables'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${p => p.theme.bodyBackgroundColor};
    color: ${p => p.theme.bodyFontColor};
    min-height: 100vh;
    margin: 0;
    /* font-family: 'Kaushan Script', cursive; */
  }
`

function App() {

  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider theme={{
      ...theme, ...generalVariables, settheme: () => {
        setTheme(val => val.id === 'light' ? DarkTheme : LightTheme)
      }
    }}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
