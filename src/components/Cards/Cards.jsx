import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StyledCards from './Cards.styled';

function Cards() {
  return (
    <StyledCards>
    <Card style={{ width: '18rem' }}>
      <Card.Body style={{ color: 'black' }}>
        <Card.Title style={{ fontSize: '2rem' }}>Mobile Development</Card.Title>
        <Card.Text>
          Make your mobile app way more effective to perform more
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Body style={{ color: 'black' }}>
      <Card.Title style={{ fontSize: '2rem' }}>Web Development</Card.Title>
      <Card.Text>
        We develop website that help improving your company's operations
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Body style={{ color: 'black' }}>
      <Card.Title style={{ fontSize: '2rem' }}>Cloud Computing</Card.Title>
      <Card.Text>
        Brings your innovative ideas to your business needs the best cloud technology
      </Card.Text>
    </Card.Body>
  </Card>
  </StyledCards>
  );
}

export default Cards;