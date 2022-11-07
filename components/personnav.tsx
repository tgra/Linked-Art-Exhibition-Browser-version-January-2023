import Card from 'react-bootstrap/Card';

export default function PersonNav() {

    const person_link_total_ex = "/persons/totalex_dsc";
    const person_link_name_asc = "/persons/name_dsc";
    const person_link_birth_asc = "/persons/born_asc";
    const person_link_death_asc = "/persons/died_asc";

  return (
    
 <Card bg="info" text="light">
 <Card.Body>
   <Card.Title>{process.env.NEXT_PUBLIC_PERSON_TITLE}</Card.Title>
   <Card.Text>{process.env.NEXT_PUBLIC_PERSON_DESCRIPTION}.</Card.Text>
   
   <Card.Link href={person_link_name_asc}>Personal name</Card.Link>
   <Card.Link href={person_link_birth_asc}>Birth date</Card.Link>
   <Card.Link href={person_link_death_asc}>Death date</Card.Link>
   <Card.Link href={person_link_total_ex}>Number of exhibitions</Card.Link>
  
 </Card.Body>
 </Card>
  )
}