import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preta: '#111111',
  cinza: '#333333',
  verde: '#10AC84',
  cinzaFooter: '#A3A3A3'
}
export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: roboto, sans-serif;
  list-style: none;
  text-decoration: none;
  }

  body {
  background-color: ${cores.preta};
  color: ${cores.branca};
  padding-top: 40px;
  }

  .container {
  max-width: 1042px;
  width: 100%;
  margin: 0 auto;
  }
`
