import RingLoader from "react-spinners/RingLoader";
import { useState } from "react";

function Image(props) {
  const Loader = () => <RingLoader id="loader" color="#ffffff" />;
  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <div className="image" onClick={() => props.setDetailed(props.id)}>
      {loading && <Loader />}
      <img
        id={props.id}
        src={"/images/" + props.location}
        style={{ visibility: loading }}
        onLoad={handleLoad}
        alt={props.location.split("/").slice(-1)}
      />
    </div>
  );
}

export default Image;
