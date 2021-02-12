import styles from "./Button.module.css";

export default function Button() {
  return (
    <button type="button" className={styles.error}>
      {/* Assim o CSS funciona desabilitando o JS no browser */}
      <style jsx>{
        `button {
          font-family: "Ubuntu", sans-serif;
          font-size: 32px;
          padding: 20px;
          text-decoration: none;
          background-color: #7229d1;
          color: white;
          transition: 300ms;
          opacity: 1;
          border: none;
          border-radius: 20px;
          cursor: pointer;
        },
        button:hover {
          background-color: #00c7c7;
          opacity: 0.7;
        }`}
      </style>
      I'm a button
    </button>
  );
}
