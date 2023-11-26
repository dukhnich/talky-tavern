import styles from "./index.module.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import languages from './../../data/languages.json'
import {useDispatch, useSelector} from "react-redux";
import { changeSettings } from "../../store/reducers/chatSlice";

const SettingsSidebar = () => {
  const [show, setShow] = useState(false);
  const settings = useSelector(state => state.chat.settings);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Settings
      </Button>

      <Offcanvas
        className={styles.characters_sidebar}
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header closeVariant="white" closeButton>
          <Offcanvas.Title className={styles.characters_title}>
              Settings
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Form.Label>Language</Form.Label>
            <Form.Select
                aria-label="Select Language"
                value={settings?.language}
                onChange={e => dispatch(changeSettings({language: e.target.value}))}
            >
                <option>Select Language</option>
                { languages.map(l =>
                    <option value={l.label} key={l.value}>{l.label}</option>
                )}
            </Form.Select>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default SettingsSidebar;
