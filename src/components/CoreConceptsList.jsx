import CoreConcept from "./CoreConcepts";

export default function CoreConceptsList({concepts}) {
    return (
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {concepts.map((component) => <CoreConcept {...component}></CoreConcept>)}
          </ul>
        </section>
    );
}