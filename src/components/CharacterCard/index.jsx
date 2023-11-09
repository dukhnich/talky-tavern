import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import {setCurrentNpc} from "../../store/reducers/chatSlice";
const CharacterCard = ({ character }) => {
  const { id, name, race, sex, age, charClass, background, alignment } =
    character;
  const list = { sex, age, charClass, background, alignment };
  const currentNpc = useSelector(state => state.chat.currentNpc);
  const dispatch = useDispatch();

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
          onClick={() => dispatch(setCurrentNpc(character))}
        >
          Choose
        </Button>
      </Card.Footer>
    </Card>
  );
};
export default CharacterCard;
