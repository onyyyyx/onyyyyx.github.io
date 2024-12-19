function DetailedView(props) {
  let image;
  for (let im of props.images) {
    if (im.id === props.id) {
      image = im;
      break;
    }
  }

  console.log(props.folders[image.type]+image.location);

  return (
    <div className="detailed">
      <div className="content">
        <header>
          <p>{image.name}</p>
          <p role="button" onClick={() => props.handleDetailed(false)}>&#x2715;</p>
        </header>
        <img src={"/images/" + props.folders[image.type] + image.location} />
      </div>
    </div>
  );
}

export default DetailedView;
