import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import mario from "./assets/mario.png";
import luigi from "./assets/luigi.png";

import { useState } from "react"; 

function App() {
  const [footerImg, setFooterImg] = useState();

  function changeFooterImg(currentFooterImage) {
    footerImg == mario ? setFooterImg(luigi) : setFooterImg(mario);
  }

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
            <TabButton onClick={() => changeFooterImg(footerImg)} isSelected={footerImg?.includes("luigi")}>Button Example: change image bellow</TabButton>
          </menu>

          {footerImg && <img src={footerImg} height={300}/>}
          <p>{footerImg}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
