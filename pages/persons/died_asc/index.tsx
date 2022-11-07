import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, NextPage } from 'next'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import PersonNav from '../../../components/personnav'
import { PersonSummaryData, PersonSummaryDataListProps } from '../../../types/personsummarydata'

import { GetPersonsDiedAsc } from '../../../lib/persondata_api'

import TheadPerson from '../../../components/theadperson'
import Person from '../../../components/rowpersonex'
import Table from 'react-bootstrap/Table';

export const getStaticProps: GetStaticProps = async (_context) => {

  const persons: PersonSummaryData[] = await GetPersonsDiedAsc()

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
       
          <Container >
            <Breadcrumb>
              <Breadcrumb.Item href="../../">{process.env.NEXT_PUBLIC_APP_BREADCRUMB_HOME}</Breadcrumb.Item>
              <Breadcrumb.Item active >{process.env.NEXT_PUBLIC_PERSON_BREADCRUMB_PLURAL}</Breadcrumb.Item>
              <Breadcrumb.Item active >Order: Death date - Ascending</Breadcrumb.Item>
            </Breadcrumb>

            <PersonNav/>
      <h3>Order: Death date - Ascending</h3>

           
           
              <Table>
            <TheadPerson/>
            <tbody>
                {
                  personSummaryDataList.map((person: PersonSummaryData) => (
                    <Person {...person} key={person.id} />
                  ))
                }
                </tbody>
                </Table>
             
          </Container>
        
      
    </SSRProvider>
  )
}
export default IndexPage