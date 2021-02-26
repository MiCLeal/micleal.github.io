import * as React from 'react'
import Header from './components/Header/Header'
import Link from './components/Link/Link'
import { GlobalStyle } from './utils/Global.styles'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { Container } from './components/Header/Header.styles'
import Malc from './perfil.png'

const App = () => {
  const theme = useSelector((state: any) => state.theme)
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Container>
          <div>
            <img
              src={Malc}
              alt=''
              height='180'
              width='180'
              style={{
                padding: 0,
                border: '5px solid #ff3939',
                borderRadius: '360px',
                background: 'red',
              }}
            />
          </div>
          <h1>Michael Anthony Leal Costa</h1>
        </Container>
        <Link href='mailto:michael.leal.costa@gmail.com' content='@' />
      </ThemeProvider>
    </>
  )
}

export default App
