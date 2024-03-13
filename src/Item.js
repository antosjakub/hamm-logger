import styles from "./index.module.css";

function Item(props) {
  return (
  <div className={styles.Item}>
    <p>{props.name}</p>
    <button></button>
  </div>);
}

export default Item