function DetailedView(props) {
  let image;
  for (let im of props.images) {
    if (im.id === props.id) {
      image = im;
      break;
    }
  }

  return (
    <div className="detailed">
      <div className="content">
        <header>
          <p>{image.location.split("/").slice(-1)}</p>
          <p onClick={() => props.setDetailed(false)}>&#x2715;</p>
        </header>
        <img src={"/images/" + image.location} alt="" />
      </div>
    </div>
  );
}

export default DetailedView;
