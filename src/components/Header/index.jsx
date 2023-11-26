import styles from "./index.module.css";
import KeyPopup from "../KeyPopup/index.jsx";
import CharactersSidebar from "../CharactersSidebar";
import SettingsSidebar from "../SettingsSidebar";
import {useSelector} from "react-redux";
const Header = ({ characters }) => {
    const currentNpc = useSelector(state => state.chat.currentNpc);
    return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
          <img src="/dice-logo.png" alt="dice logo" className={styles.icon} />
          TalkyTavern
      </div>
      <p className={styles.header__title}>
        Dialog with {currentNpc?.name || "NPC"}
      </p>
      <CharactersSidebar
        characters={characters}
      />
      <SettingsSidebar />
      <KeyPopup />
    </header>
  );
};

export default Header;
