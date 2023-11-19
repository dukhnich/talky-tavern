import styles from "./index.module.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
const languages = [
    { value: 1, label: "English" },
    { value: 2, label: "German" },
    { value: 3, label: "French" },
    { value: 4, label: "Italian" },
    { value: 5, label: "Spanish" },
    { value: 6, label: "Portuguese" },
    { value: 7, label: "Russian" },
    { value: 8, label: "Polish" },
    { value: 9, label: "Dutch" },
    { value: 10, label: "Swedish" },
    { value: 11, label: "Danish" },
    { value: 12, label: "Norwegian" },
    { value: 13, label: "Finnish" },
    { value: 14, label: "Greek" },
    { value: 15, label: "Turkish" },
    { value: 16, label: "Czech" },
    { value: 17, label: "Slovak" },
    { value: 18, label: "Hungarian" },
    { value: 19, label: "Romanian" },
    { value: 20, label: "Bulgarian" },
    { value: 21, label: "Ukrainian" },
    { value: 22, label: "Serbian" },
    { value: 23, label: "Croatian" },
    { value: 24, label: "Slovenian" },
    { value: 25, label: "Estonian" },
    { value: 26, label: "Latvian" },
    { value: 27, label: "Lithuanian" },
    { value: 28, label: "Albanian" },
    { value: 29, label: "Macedonian" },
    { value: 30, label: "Irish" },
];
const SettingsSidebar = () => {
  const [show, setShow] = useState(false);

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
            <Form.Select aria-label="Select Language">
                <option>Select Language</option>
                { languages.map(l =>
                    <option value={l.value} key={l.key}>{l.label}</option>
                )}
            </Form.Select>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default SettingsSidebar;
