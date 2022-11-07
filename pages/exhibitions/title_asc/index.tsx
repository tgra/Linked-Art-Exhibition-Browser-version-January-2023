import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, NextPage } from 'next'
import ExNav from '../../../components/exnav'
import TheadEx from '../../../components/theadex'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import  SSRProvider from 'react-bootstrap/SSRProvider';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { ExSummaryData, ExSummaryDataListProps} from '../../../types/exsummarydata'
import Table from 'react-bootstrap/Table';
import Ex from '../../../components/rowex'
import { GetExsTitleAsc } from '../../../lib/exhibitiondata_api'
 
export const getStaticProps: GetStaticProps = async (_context) => {
  
  const exs: ExSummaryData[] = await GetExsTitleAsc()

  return {
    props: {
      exSummaryDataList: exs,
    },
  }
}



const IndexPage: NextPage<ExSummaryDataListProps> = ({
  exSummaryDataList,
}: ExSummaryDataListProps) => {

  return (
    <SSRProvider>
    <div>
    <Head>
      <title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      ></link>
<script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin async></script>
    
    </Head>

    <main>

    <Container>
    <Breadcrumb>
    <Breadcrumb.Item href="/">{process.env.NEXT_PUBLIC_APP_BREADCRUMB_HOME}</Breadcrumb.Item>
    <Breadcrumb.Item active >{process.env.NEXT_PUBLIC_ACTIVITY_BREADCRUMB_PLURAL}</Breadcrumb.Item>
    <Breadcrumb.Item active >Order: Exhibition Title - Ascending</Breadcrumb.Item>
   
</Breadcrumb> 

<ExNav/>
     
           <h3>Order: Exhibition Title - Ascending</h3>
        
        <Row>
          <Col>
          <Table striped bordered hover size="sm" >
            <TheadEx/>
            <tbody>
          {
            exSummaryDataList.map((ex: ExSummaryData) => (
            <Ex {...ex} key={ex.id} />
            
            
            ))
            }
            </tbody>
            </Table>

            
        

            </Col>
            </Row>
      </Container>
    </main>
   
  </div>
 </SSRProvider>
  )
}

export default IndexPage




