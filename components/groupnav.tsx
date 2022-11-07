import Card from 'react-bootstrap/Card';

export default function GroupNav() {

   
  return (
    
 <Card bg="info" text="light">
 <Card.Body>
   <Card.Title>{process.env.NEXT_PUBLIC_GROUP_TITLE}</Card.Title>
   <Card.Text>{process.env.NEXT_PUBLIC_GROUP_DESCRIPTION}.</Card.Text>
  
  
 </Card.Body>
 </Card>
  )
}