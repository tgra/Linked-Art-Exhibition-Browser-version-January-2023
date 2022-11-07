import Link from 'next/link'
import Head from 'next/head'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import React from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ExData, ExDataProps } from '../../types/exdata'
import { GetExs, GetEx } from '../../lib/exhibitiondata_api'
import ExNav from '../../components/exnav'
import Card from 'react-bootstrap/Card';



function extractNumber(str: any) {
    return str.id.split("/").pop()
}

interface Params extends ParsedUrlQuery {
    id: string
}
export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const exList: ExData[] = await GetExs()
    let ids = exList.map(extractNumber)

    return {
        paths: ids.map((id) => {
            return {
                params: {
                    id: id
                },
            }
        }),
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<ExDataProps, Params> = async (
    context
) => {
    const { id } = context.params! as Params
    const exData: ExData = await GetEx(parseInt(id))
    return {
        props: {
            exData,
        },
    }
}

const Ex: NextPage<ExDataProps> = ({ exData }: ExDataProps) => {

    if (exData == undefined) {
        return <div>processing...</div>
    }




    return (
        <div>
            <Head>
                <title> Alternative New York Exhibition - Exhibition</title>
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin async></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossOrigin="anonymous" />
            </Head>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="../../">Home</Breadcrumb.Item>

                    <Breadcrumb.Item active href="#">Exhibition</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">{exData._label}</Breadcrumb.Item>
                </Breadcrumb>
<ExNav/>
                <h2>Exhibition: {exData._label}</h2>
              
                    <Card key="c1" bg="info" text="light">
                        <Card.Header>Dates</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>Start date: {new Date(exData.timespan.begin_of_the_begin).toDateString()}  </p>
                                <p>End date: {new Date(exData.timespan.end_of_the_end).toDateString()}</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card bg="warning" text="dark" key="c2">
                        <Card.Header>Location</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>{exData.took_place_at[0]._label}</p>
                                <p>{exData.took_place_at[0].defined_by}</p>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {
                        exData.subject_of?.map((sub) => (
                            <Card bg="light" key={sub.id} text="dark">
                                <Card.Header>Subject of </Card.Header>
                                <Card.Body>
                                    <Card.Text key={sub.id}>
                                        {sub.digitally_carried_by.map((dig) => (
                                            <p key={dig.id}>{dig.classified_as[0]._label} :  <Link href={dig.access_point[0].id}>{dig.access_point[0].id}</Link></p>
                                        ))
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
 
                <Card bg="info" text="light" key="c4">
                        <Card.Header>Influenced by</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {exData.influenced_by?.map((agent) => (
                                    <p key={agent.id}><Link href={"/person/" + agent.id.split("/").pop()}>{agent._label}</Link></p>
                                ))}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card bg="warning" text="dark" key="c5">
                        <Card.Header>Carried out by  </Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {exData.carried_out_by?.map((agent) => (
                                    <p key={agent.id}><Link href={"/" + agent.type.toLowerCase() + "/" + agent.id.split("/").pop()}>{agent._label}</Link></p>

                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Container>
        </div>
    )
}

export default Ex


