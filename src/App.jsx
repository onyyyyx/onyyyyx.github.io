import Gallery from "./components/Gallery";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [filter, setFilter] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Moon: (i) => i.type === 0,
    Stars: (i) => i.type === 1,
    DeepSky: (i) => i.type === 2,
    OpenField: (i) => i.type === 3,
    Planetary: (i) => i.type === 4,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const imagesList = props.images
    .filter(FILTER_MAP[filter])
    .map((image) => (
      <Gallery
        id={image.id}
        location={image.location}
        type={image.type}
        key={image.id}
      />
    ));
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <main>
      <header>
        <button class="button" data-text="Awesome">
          <span class="actual-text">&nbsp;sky&nbsp;</span>
          <span aria-hidden="true" class="hover-text">
            &nbsp;sky&nbsp;
          </span>
        </button>
        <div className="filters btn-group stack-exception">{filterList}</div>
      </header>
      <div className="gallery">
        <ul role="list" className="" aria-labelledby="list-heading">
          {imagesList}
        </ul>
      </div>
    </main>
  );
}

export default App;
