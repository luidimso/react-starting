import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConceptsList from "./components/CoreConceptsList.jsx";
import Examples from "./components/Examples.jsx";

import { Fragment } from "react"; 

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <CoreConceptsList concepts={CORE_CONCEPTS}></CoreConceptsList>
        <Examples id="example"></Examples>
      </main>
    </Fragment>
  );
}

export default App;
