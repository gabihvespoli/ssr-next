import styles from "./Header.module.css";

export default function Header() {
  return(
    <header className={styles.header}>
      {/* Assim o CSS funciona desabilitando o JS no browser */}
      <style jsx>{
        `header {
          display: flex;
          align-items: center;
          background: linear-gradient(330deg, #7229d1 0%, #00c7c7 100%);
          width: 100%;
          height: 100px;
          padding: 0;
          margin: 0;
        },
        a {
          font-family: "Ubuntu", sans-serif;
          font-size: 32px;
          transition: 300ms;
          opacity: 0.7;
          padding-left: 20px;
          margin-left: 40px;
          text-decoration: none;
          color: white;
        },
        a:hover {
          opacity: 1;
        }`}
      </style>
      <div className={styles.social}>
        <a href="https://www.linkedin.com/in/gabihvespoli/" target="_blank" title="Linkedin"
          >Linkedin</a>
        <a href="https://github.com/gabihvespoli" target="_blank" title="GitHub"
          >Github</a>
        <a href="mailto:gabiat3@hotmail.com" title="E-mail"
          >E-mail</a>
      </div>
    </header>
  );
}