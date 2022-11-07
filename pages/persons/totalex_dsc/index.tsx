import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import Script from 'next/script'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import  SSRProvider from 'react-bootstrap/SSRProvider';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import { PersonSummaryDataEx, PersonSummaryDataExListProps} from '../../../types/personsummarydataex'
import PersonEx from '../../../components/rowpersonex'
import { GetPersonsTotalExDsc } from '../../../lib/persondata_api'
import TheadPerson from '../../../components/theadperson'
import PersonNav from '../../../components/personnav'

export const getStaticProps: GetStaticProps = async (_context) => {
  const persons: PersonSummaryDataEx[] = await GetPersonsTotalExDsc()
  return {
    props: {
      personSummaryDataExList: persons,
    },
  }
}

const IndexPage: NextPage<PersonSummaryDataExListProps> = ({
  personSummaryDataExList, 
}: PersonSummaryDataExListProps) => {


  

  return (
    <SSRProvider>
      <Script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin async/>
    <Head>
      <title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      ></link>
   
    </Head>

    <main>

    <Container>
    <Row>
    <Col>
    <Breadcrumb>
    <Breadcrumb.Item href="../../">{process.env.NEXT_PUBLIC_APP_BREADCRUMB_HOME}</Breadcrumb.Item>
    <Breadcrumb.Item active >{process.env.NEXT_PUBLIC_PERSON_BREADCRUMB_PLURAL}</Breadcrumb.Item>
    <Breadcrumb.Item active >Order: Total number of exhibitions - Descending</Breadcrumb.Item>
   
</Breadcrumb> 
      
      <PersonNav/>
           
      <h3>Order: Total number of exhibitions - Descending</h3>
     
     </Col>
     </Row>
        <Row>
          <Col>
          <Table striped bordered hover size="sm" >
           <TheadPerson/>
            <tbody>
          {
            personSummaryDataExList.map((person: PersonSummaryDataEx) => (
            <PersonEx {...person} key={person.id} />
            
            ))
            }
</tbody></Table>
            
        

            </Col>
            </Row>
      </Container>
    </main>
  
  
 </SSRProvider>
  )
}

export default IndexPage



