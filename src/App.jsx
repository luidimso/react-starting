import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import mario from "./assets/mario.png";
import luigi from "./assets/luigi.png";

import { useState, Fragment } from "react"; 

function App() {
  const [footerImg, setFooterImg] = useState();

  function changeFooterImg(currentFooterImage) {
    footerImg == mario ? setFooterImg(luigi) : setFooterImg(mario);
  }

  return (
    <Fragment>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((component) => <CoreConcept {...component}></CoreConcept>)}
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
    </Fragment>
  );
}

export default App;
