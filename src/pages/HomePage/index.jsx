import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { createOpenAiClient, generate } from "../../api/generate";
import Header from "../../components/Header/index.jsx";
import characters from "../../data/characters.json";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";

const Home = () => {
  const apiKey = useSelector(state => state.chat.key);
  const [currentNpc, setCurrentNpc] = useState();
  const [message, setMessage] = useState("");
  const [result, setResult] = useState();
  const setCurrentNpcById = (id) => {
    const npc = (characters || []).find((c) => c.id === id);
    setCurrentNpc(npc);
  };
  useEffect(() => {
    createOpenAiClient(apiKey);
  }, [apiKey]);
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const data = await generate(currentNpc, message);
      setResult(data.result);
      // setMessage('');
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }

  return (
    <div>
      <Header
        characters={characters}
        currentNpc={currentNpc}
        onSetNpc={setCurrentNpcById}
      />
      <main className={styles.main}>
        <img src="/dice-logo.png" alt="dice logo" className={styles.icon} />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Enter a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Send
          </Button>
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
};

export default Home;
