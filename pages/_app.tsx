import type { AppProps } from 'next/app'
import GlobalStyle from '../components/globalstyles'
import Header from '../components/header'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
