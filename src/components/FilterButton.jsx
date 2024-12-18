function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span className="visually-hidden">Show </span>
      <span>{props.name.toLowerCase()}</span>
      <span className="visually-hidden"> images</span>
    </button>
  );
}

export default FilterButton;
