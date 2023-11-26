import styles from "./index.module.css";

const Message = ({ message }) => {
    return (
        <div className={styles.message}>
          <div className={styles.author}>
            {message.role}
          </div>
          <div className={styles.text}>
            {message.content}
          </div>
        </div>
  );
};
export default Message;
