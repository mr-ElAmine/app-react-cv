import React from 'react';
import { useState } from "react";

function Onglets() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
          Python
        </button>
        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
          HTML/CSS/JS
        </button>
        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
          C/C++
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <h2>Python</h2>
          <hr/>
          <p>
            Je suis un développeur intermédiaire en Python avec plusieurs années d'expérience 
            dans la création de sites web, l'utilisation d'API et l'analyse de données. J'ai 
            utilisé des bibliothèques telles que Django, Flask, Requests, NumPy, Pandas et 
            encor d'auter. Je suis passionné par ce que je fais et je suis toujours en train 
            d'apprendre de nouvelles techniques pour améliorer mes compétences.
          </p>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <h2>HTML/CSS/JS</h2>
          <hr/>
          <p>
            J'ai commencé ma carrière en développement en apprenant les bases du HTML et du CSS. 
            J'ai rapidement compris l'importance de ces technologies pour la création de sites web 
            attractifs et fonctionnels.
          </p>
          <p>
            Dans un second temps, j'ai étendu mes connaissances en apprenant le JavaScript. 
            Cependant, je n'ai pas apprécié cette technologie autant que je l'espérais. 
            Je trouve que le JavaScript peut être complexe et difficile à comprendre, 
            surtout lorsqu'il est utilisé pour des applications plus complexes.
          </p>
          <p>
            Cependant, je suis toujours passionné par le développement web et je continue 
            d'apprendre de nouvelles technologies pour améliorer mes compétences.
          </p>
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
          <h2>C/C++</h2>
          <hr/>
          <p>
            J'ai commencé à découvrir le monde de l'électronique pendant ma scolarité au lycée en
            travaillant avec Arduino et les langages de programmation C et C++. 
            J'ai été fasciné par les possibilités qu'offrent ces technologies et j'ai rapidement commencé 
            à explorer leur potentiel en développant des projets pour divers projets scolaires.
          </p>
          <p>
            J'ai utilisé C et C++ pour contrôler des dispositifs électroniques, comme des capteurs et des 
            actionneurs, et pour collecter et analyser des données en temps réel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Onglets;