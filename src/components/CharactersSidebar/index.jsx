import styles from "./index.module.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CharacterCard from "../CharacterCard/index.jsx";
const CharactersSidebar = ({ characters, currentNpc, onSetNpc }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Characters
      </Button>

      <Offcanvas
        className={styles.characters_sidebar}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeVariant="white" closeButton>
          <Offcanvas.Title className={styles.characters_title}>
            Characters
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {characters.map((c) => (
            <CharacterCard
              key={c.id}
              currentNpc={currentNpc}
              onSetNpc={onSetNpc}
              character={c}
            />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default CharactersSidebar;
