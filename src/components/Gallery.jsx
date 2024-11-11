function Gallery(props) {
  return <img id={props.id} src={"/images/" + props.location} />;
}

export default Gallery;
