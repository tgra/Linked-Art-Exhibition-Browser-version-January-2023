import Card from 'react-bootstrap/Card';

export default function ExNav() {

   
  return (
    
 <Card bg="info" text="light">
 <Card.Body>
   <Card.Title>{process.env.NEXT_PUBLIC_ACTIVITY_TITLE}</Card.Title>
   <Card.Text>{process.env.NEXT_PUBLIC_ACTIVITY_DESCRIPTION}.</Card.Text>
   <Card.Link href={'/exhibitions/title_asc'}>Exhibition title</Card.Link>
   <Card.Link href={'/exhibitions/start_asc'}>Start date</Card.Link>
 </Card.Body>
 </Card>
  )
}