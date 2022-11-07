import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { GetStaticProps, NextPage } from 'next'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import  SSRProvider from 'react-bootstrap/SSRProvider';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import PersonNav from '../../../components/personnav'
import { PersonSummaryData, PersonSummaryDataListProps} from '../../../types/personsummarydata'

import { GetPersonsBornAsc } from '../../../lib/persondata_api'
import TheadPerson from '../../../components/theadperson'
import Person from '../../../components/rowpersonex'

export const getStaticProps: GetStaticProps = async (_context) => {
  
  const persons: PersonSummaryData[] = await GetPersonsBornAsc()

  return {
    props: {
      personSummaryDataList: persons,
    },
  }
}



const IndexPage: NextPage<PersonSummaryDataListProps> = ({
  personSummaryDataList,
}: PersonSummaryDataListProps) => {

  return (
    <SSRProvider>
      <Script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin async/>
   
    <div>
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
    <Breadcrumb>
    <Breadcrumb.Item href="../../">{process.env.NEXT_PUBLIC_APP_BREADCRUMB_HOME}</Breadcrumb.Item>
    <Breadcrumb.Item active >{process.env.NEXT_PUBLIC_PERSON_BREADCRUMB_PLURAL}</Breadcrumb.Item>
    <Breadcrumb.Item active >Order: Birth date - Ascending</Breadcrumb.Item>
   
</Breadcrumb> 
     <PersonNav/>
      <h3>Order: Birth date - Ascending</h3> 

        <Row>
          <Col>
          <Table>
            
         
          <TheadPerson/>
          <tbody>
          {
            personSummaryDataList.map((person: PersonSummaryData) => (
            <Person {...person} key={person.id} />
            
            ))
            }

            
</tbody></Table>

            </Col>
            </Row>
      </Container>
    </main>
   
  </div>
 </SSRProvider>
  )
}

export default IndexPage




