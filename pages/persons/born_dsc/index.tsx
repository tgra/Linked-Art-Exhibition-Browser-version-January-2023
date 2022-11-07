import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, NextPage } from 'next'

import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import PersonNav from '../../../components/personnav'
import { PersonSummaryData, PersonSummaryDataListProps } from '../../../types/personsummarydata'
import TheadPerson from '../../../components/theadperson'
import Person from '../../../components/rowpersonex'
import Table from 'react-bootstrap/Table';
import { GetPersonsBornDsc } from '../../../lib/persondata_api'

export const getStaticProps: GetStaticProps = async (_context) => {

  const persons: PersonSummaryData[] = await GetPersonsBornDsc()

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
              <Breadcrumb.Item href="../../">{process.env.NEXT_PUBLIC_APP_BREADCRUMB_HOME}</Breadcrumb.Item>
              <Breadcrumb.Item active >{process.env.NEXT_PUBLIC_PERSON_BREADCRUMB_PLURAL}</Breadcrumb.Item>
              <Breadcrumb.Item active >Order: Birth date - Descending</Breadcrumb.Item>
            </Breadcrumb>
            <PersonNav />
            <h3>Order: Birth date - Descending</h3>
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
        </main>
      </div>
    </SSRProvider>
  )
}

export default IndexPage




