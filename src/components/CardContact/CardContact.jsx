import Card from 'react-bootstrap/Card';
import StyledCards from './CardContact.styled'

function CardContact() {
  return (
    <StyledCards>
    <Card style={{ width: '18rem' }}>
      <Card.Body style={{ color: 'black' }}>
        <Card.Title style={{ fontSize: '2rem' }}>Email</Card.Title>
        <Card.Text>
          technova@informatika.co.id
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Body style={{ color: 'black' }}>
      <Card.Title style={{ fontSize: '2rem' }}>WhatsApp</Card.Title>
      <Card.Text>
        +62881-5331-8441
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Body style={{ color: 'black' }}>
      <Card.Title style={{ fontSize: '2rem' }}>LinkendIn</Card.Title>
      <Card.Text>
        LinkedIn.com/in/Technova/
      </Card.Text>
    </Card.Body>
  </Card>
  </StyledCards>
  );
}

export default CardContact;