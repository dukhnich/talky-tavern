import styles from "./index.module.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CharacterCard from "../CharacterCard/index.jsx";
import characters from "../../data/characters.json";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import Character from "../../model/Character";
import {useSelector} from "react-redux";
const CharactersSidebar = () => {
  const [show, setShow] = useState(false);
    const currentNpc = useSelector(state => state.chat.currentNpc);
    const [charactersList, setCharactersList] = useState();
  const [currentNpc1, setCurrentNpc1] = useState();
  useLocalStorage('npc-characters', charactersList, setCharactersList, true);
  useLocalStorage('npc-current-character', currentNpc1, setCurrentNpc1, true);
  useEffect(() => {
      if (!(charactersList && charactersList.length)) {
          setCharactersList(characters);
      }
  }, [])
    useEffect(() => {
        if (currentNpc) {
            const n = new Character(currentNpc);
            console.log(n, currentNpc)
      setCurrentNpc1(n)}
  }, [currentNpc])
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
              character={c}
            />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default CharactersSidebar;
