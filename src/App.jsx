import Image from "./components/Image";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import DetailedView from "./components/DetailedView";

function App(props) {
  const [filter, setFilter] = useState("All");
  const [detailed, setDetailed] = useState(false);

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
      <Image
        id={image.id}
        location={image.location}
        type={image.type}
        key={image.id}
        setDetailed={setDetailed}
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
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;sky&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;sky&nbsp;
          </span>
        </button>
        <div className="filters btn-group stack-exception">{filterList}</div>
      </header>
      <div className="gallery">{imagesList}</div>
      {detailed !== false ? <DetailedView id={detailed} images={props.images} setDetailed={setDetailed} /> : ""}
    </main>
  );
}

export default App;
