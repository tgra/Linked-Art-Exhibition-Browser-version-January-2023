import Head from 'next/head'

import Script from 'next/script'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import  SSRProvider from 'react-bootstrap/SSRProvider';
import PersonNav from '../components/personnav'
import GroupNav from '../components/groupnav'
import ExNav from '../components/exnav'
export default function Home() {

 

  return (
    <SSRProvider>
      <Script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin async />
    
    <Head>
      <title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      ></link>

    
    </Head>

  
    <Container>
      <h1>{process.env.NEXT_PUBLIC_APP_TITLE}</h1>
        <p className="description">{process.env.NEXT_PUBLIC_APP_DESCRIPTION}</p>
       <PersonNav/>
       <ExNav/>
       <GroupNav/>
      </Container>
      

  </SSRProvider>
  )
}




