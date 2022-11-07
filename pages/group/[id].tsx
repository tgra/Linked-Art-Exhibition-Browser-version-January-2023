import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'

import { ParsedUrlQuery } from 'querystring'

import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';

import GroupNav from '../../components/groupnav'
import { GroupData, GroupDataProps } from '../../types/groupdata'
import { GetGroups, GetGroup } from '../../lib/groupdata_api'


function extractNumber(str: any) {
    return  str.id.split("/").pop()
    
}

interface Params extends ParsedUrlQuery {
    id: string
}
export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const groupList: GroupData[] = await GetGroups()
    let ids = groupList.map(extractNumber)

    
    return {
        paths: ids.map((id) => {
            return { params: { id: id, } }
        }),
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<GroupDataProps, Params> = async (
    context
) => {
    const { id } = context.params! as Params
    const groupData: GroupData = await GetGroup(id)
    
    return {
        props: {
            groupData
        },
    }
}

const Group: NextPage<GroupDataProps> = ({ groupData }: GroupDataProps) => {

    if (groupData == undefined) {
        return <div>processing...</div>
    }
   
    return (
        <div>
            <Head>
                <title> Alternative New York Exhibition - Group</title>
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin async></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossOrigin="anonymous" />
            </Head>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="../../">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">Group</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">{groupData._label}</Breadcrumb.Item>
                </Breadcrumb>
                <GroupNav />
                <h2>Group: {groupData._label}</h2>
                <CardGroup key="1">
                    <Card bg="warning" text="dark">
                        <Card.Header>Identifiers</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {groupData.identified_by?.map((ident) => (<p key={ident.content}> {ident.type}: {ident.content}</p>))}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card bg="info" text="light">
                        <Card.Header>Equivalent Entities</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {groupData.equivalent?.map((eq) => (<p key={eq.id}> <Link href={eq.id}>{eq._label}: {eq.id}</Link></p>))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>



            </Container>




        </div>
    )
}

export default Group



