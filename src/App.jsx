import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
          </ul>
        </section>
        <h2>Time to get started!</h2>

        <section id="examples">
          <menu>
            <TabButton>Button Example</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
