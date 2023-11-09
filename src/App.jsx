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

function CoreConcept(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <CoreConcept title="Test 1" description="Test 1: text"></CoreConcept>
          <CoreConcept title="Test 2" description="Test 2: text"></CoreConcept>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
