import Button from "../components/Button";
import Header from "../components/Header";

// Renderiza do lado do servidor
function HomePage() {
  return (
    <div>
      {/* Assim o CSS funciona desabilitando o JS no browser */}
      <style jsx>{
        `p {
          font-family: "Ubuntu", sans-serif;
          font-size: 32px;
          text-align: center;
        }`}
      </style>
      <Header />
      <p>Welcome to my contacts!</p>
      <Button />
    </div>
  );
}

export default HomePage;
