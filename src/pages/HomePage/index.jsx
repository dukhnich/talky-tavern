import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { createOpenAiClient, generate } from "../../api/generate";
import Header from "../../components/Header/index.jsx";
import characters from "../../data/characters.json";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import { setKey, changeSettings } from "../../store/reducers/chatSlice";
import Character from "../../model/Character";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Message from "../../components/Message";
const Home = () => {
  const apiKey = useSelector(state => state.chat.key);
  const settings = useSelector(state => state.chat.settings);
  const currentNpc = useSelector(state => state.chat.currentNpc);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [result, setResult] = useState();
  const addMessage = (msg) => setMessages([...messages, msg]);
  useLocalStorage('npc-api-key', apiKey, setKey );
  useLocalStorage('npc-settings', settings, changeSettings );
  useEffect(() => {
    createOpenAiClient(apiKey);
  }, [apiKey]);
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const message = {
        role: "user",
        content: text,
      };
      await addMessage(message)
      const data = await generate(new Character(currentNpc), messages, settings);
      addMessage(data.result.choices[0].message);
      setText('');
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }

  return (
    <div>
      <Header characters={characters} />
      <main className={styles.main}>
        <div className="messages-list">
          {messages.map((msg, i) => <Message message={msg} key={i} />)}
        </div>
        <Form onSubmit={onSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="text">🖋️</InputGroup.Text>
            <Form.Control
                placeholder="Enter a message"
                aria-label="OpenApi Key"
                aria-describedby="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button variant="outline-primary" type="submit" disabled={!text}>
              Send
            </Button>
          </InputGroup>
        </Form>
      </main>
    </div>
  );
};

export default Home;
