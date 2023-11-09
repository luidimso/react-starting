
import TabButton from "./TabButton.jsx";

import mario from "../assets/mario.png";
import luigi from "../assets/luigi.png";

import { useState } from "react";

export default function Examples() {
    const [footerImg, setFooterImg] = useState();

    function changeFooterImg(currentFooterImage) {
        footerImg == mario ? setFooterImg(luigi) : setFooterImg(mario);
    }

    return (
        <section id="examples">
          <menu>
            <TabButton onClick={() => changeFooterImg(footerImg)} isSelected={footerImg?.includes("luigi")}>Button Example: change image bellow</TabButton>
          </menu>

          {footerImg && <img src={footerImg} height={300}/>}
          <p>{footerImg}</p>
        </section>
    );
}