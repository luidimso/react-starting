import img from "./assets/react-core-concepts.png";

const d = new Date();

function Header() {
  return (
    <header>
        <img src={img} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {d.getDate()} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}


function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
