import styles from "./index.module.css";
import KeyPopup from "../KeyPopup/index.jsx";
import CharactersSidebar from "../CharactersSidebar/index.jsx";
import {useSelector} from "react-redux";
const Header = ({ characters }) => {
    const currentNpc = useSelector(state => state.chat.currentNpc);
    return (
    <header className={styles.header}>
      <div className={styles.header__logo}>TalkyTavern</div>
      <p className={styles.header__title}>
        Dialog with {currentNpc?.name || "NPC"}
      </p>
      <CharactersSidebar
        characters={characters}
      />
      <KeyPopup />
    </header>
  );
};

export default Header;
