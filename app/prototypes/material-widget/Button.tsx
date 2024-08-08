import styles from "./Button.module.css";

export default function Button() {
  const buttonStyles = styles.button;

  return <button className={buttonStyles}>Click</button>;
}
