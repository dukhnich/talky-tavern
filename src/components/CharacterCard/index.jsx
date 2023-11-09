import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
const CharacterCard = ({ character, currentNpc, onSetNpc }) => {
  const { id, name, race, sex, age, charClass, background, alignment } =
    character;
  const list = { sex, age, charClass, background, alignment };
  return (
    <Card className="mb-4">
      <Card.Header>NPC</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{race}</Card.Subtitle>
      </Card.Body>
      <ListGroup>
        {Object.entries(list).map(([key, value]) => (
          <ListGroup.Item key={key}>
            <div className="d-flex align-baseline justify-content-between">
              {key}
              <div className="fw-bold">{value}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Footer className="text-muted">
        <Button
          variant="primary"
          disabled={currentNpc?.id === id}
          onClick={() => onSetNpc(id)}
        >
          Choose
        </Button>
      </Card.Footer>
    </Card>
  );
};
export default CharacterCard;
