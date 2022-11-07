import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'

import { ParsedUrlQuery } from 'querystring'

import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';

import PersonNav from '../../components/personnav'

import { PersonData, PersonDataProps } from '../../types/persondata'
import { GetPersons, GetPerson } from '../../lib/persondata_api'

import { GetExs, GetEx } from '../../lib/exhibitiondata_api'
import { ExData, ExDataProps } from '../../types/exdata'


var personid = ""

function extractNumber(person: any) {
    return person.id.split("/").pop()
    
}

function getPersonEx(ex: any, id: string) {
    if (id in ex.influenced_by){
        return ex
    } else {
        return {}
    }
}

interface Params extends ParsedUrlQuery {
    id: string
}
export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const personList: PersonData[] = await GetPersons()
    let ids = personList.map(extractNumber)
 
    return {
        paths: ids.map((id) => {
            return { params: { id: id} }
        }),

        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<PersonDataProps, Params> = async (
    context
) => {
    const { id } = context.params! as Params

   
    const personData: PersonData = await GetPerson(id)

    let exList: ExData[] = await GetExs()

    return {
        props: {
            personData, exList
        },
    }
}

const Person: NextPage<PersonDataProps> = ({ personData, exList }: PersonDataProps) => {

   
    let names = []
    let identifiers = []

    if (personData == undefined) {
        return false
    }

    personid = personData.id


    if ("identified_by" in personData) {
        let ids = personData.identified_by
        for (var idx in ids) {
            switch (ids[idx].type) {
                case "Name":
                    names.push(ids[idx])
                    break
                case "Identifier":
                    identifiers.push(ids[idx])
                    break
            }
        }
    }

    let personal_name = personData._label
    let nationality = ""
    if ("classified_as" in personData) {

        nationality = personData.classified_as[0]._label
    }
    let born = ""
    if ("born" in personData) {
        born = new Date(personData.born.timespan.begin_of_the_begin).toDateString()
    }

    let died = ""
    if ("died" in personData) {
        died = new Date(personData.died.timespan.begin_of_the_begin).toDateString()
    }

    return (
        <div>
            <Head>
                <title> Alternative New York Exhibition - Person</title>
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin async></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossOrigin="anonymous" />
            </Head>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="../../">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">Person</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">{personal_name}</Breadcrumb.Item>
                </Breadcrumb>
                <PersonNav/>
                <h2>Person: {personal_name}</h2>
               
                    <Card bg="success" text="light">
                        <Card.Header>Biographical Data</Card.Header>
                        <Card.Body>
                            
                            <Card.Text>
                            <p>Personal Name: {personal_name}</p>
                            <p>Biographical Statement: </p>
                                {personData.referred_to_by?.map((statement) => (<p key={statement.id}>{statement.classified_as[0]._label} - {statement.content}</p>))}

                        <p>Born: {born}</p>
                           
                           <p>Died:  {died}</p>
                            <p>Nationality:  {nationality}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="warning" text="dark">
                        <Card.Header>Identifiers</Card.Header>
                        <Card.Body>
                            <Card.Title>Identifiers</Card.Title>
                            <Card.Text>
                                {identifiers?.map((ident) => (<p key={ident.content}>{ident.content} <sup>attributed by:<Link href={ident.attributed_by[0].carried_out_by[0].id.replace(process.env.NEXT_PUBLIC_BASE_URI, "").toLowerCase()}>{ident.attributed_by[0].carried_out_by[0]._label}</Link></sup></p>))}


                            </Card.Text>

                            <Card.Title>Equivalent Entities</Card.Title>
                            <Card.Text>
                                {personData.equivalent?.map((eq) => (
                                    <div key={eq.id}>
                                        <p>{eq._label}<br />
                                            <Link key={eq.id} href={eq.id}>{eq.id}</Link></p>
                                    </div>
                                ))}


                            </Card.Text>

                        </Card.Body>
                    </Card>
              
                    

                <Card bg="info" text="light">
                        <Card.Header>Exhibitions (influenced)</Card.Header>
                        <Card.Body>
                        
                            <Card.Text>{exList.map(personEventsInfluenced)}</Card.Text>

                        </Card.Body>
                    </Card>

                    <Card bg="warning" text="dark">
                        <Card.Header>Exhibitions (carried out)</Card.Header>
                        <Card.Body>
                        
                            <Card.Text>{exList.map(personEventsCarriedOutBy)}</Card.Text>

                        </Card.Body>
                    </Card>
            </Container>




        </div >
    )
}

export default Person



function personEventsInfluenced(ev:any){

    if ("influenced_by" in ev == undefined){
        return {}
    }
    let influencers = ev.influenced_by
    if (influencers.includes(personid)){
        return <p key={ev.id}><Link href={'/exhibition/' + ev.id.split('/').pop()}>{ev._label}</Link>   ({new Date(ev.start).toDateString()}-{new Date(ev.end).toDateString()})</p>
    } else {
        return ""
    }
}


function personEventsCarriedOutBy(ev:any){

    if ("carried_out_by" in ev == undefined){
        return {}
    }
    let c = ev.carried_out_by
    if (c.includes(personid)){
        return <p key={ev.id}><Link href={'/exhibition/' + ev.id.split('/').pop()}>{ev._label}</Link>   ({new Date(ev.start).toDateString()}-{new Date(ev.end).toDateString()})</p>
    } else {
        return ""
    }
}