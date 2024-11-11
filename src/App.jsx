import Gallery from "./components/Gallery";
import { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const FILTER_MAP = {
    All: () => true,
    M: (i) => i === 0,
    S: (i) => i === 1,
    D: (i) => i === 2,
    O: (i) => i === 3,
    P: (i) => i === 4,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const imagesList = props.images.map((image) => (
    <Gallery id={image.id} location={image.location} key={image.id} />
  ));

  return (
    <div className="gallery stack-large">
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {imagesList}
      </ul>
    </div>
  );
}

export default App;
