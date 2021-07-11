import '../styles/globals.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head'
import { Provider } from 'next-auth/client'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
     <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/docs.png" />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
     </Head>
     <Provider session={pageProps.session}>
       <Component {...pageProps} />
     </Provider>
      
    </>
  )
}

export default MyApp
