import styles from "./index.module.css";
import KeyPopup from "../KeyPopup/index.jsx";
import CharactersSidebar from "../CharactersSidebar/index.jsx";
const Header = ({ characters, currentNpc, onSetNpc }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>TalkyTavern</div>
      <p className={styles.header__title}>
        Dialog with {currentNpc?.name || "NPC"}
      </p>
      <CharactersSidebar
        characters={characters}
        currentNpc={currentNpc}
        onSetNpc={onSetNpc}
      />
      <KeyPopup />
    </header>
  );
};

export default Header;
