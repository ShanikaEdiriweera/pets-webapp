import './pill.css';

function Pill(props) {
  const {
    text,
    name,
    onClick,
    isDropdown,
    isSelected,
    styleOverride={}
  } = props;

  let className = "pill";
  if (isSelected) className += " pill-selected";
  if (isDropdown) className += " pill-dropdown";

  return (
    <button
      onClick={ (e) => onClick(name, isDropdown, e) }
      className={ className }
      style={ styleOverride }
    >
      <span>{ text }</span>
      { isDropdown ? <img src="/icons/chevron-down.svg" alt="button icon" ></img> : null }
    </button>
  );
}

export default Pill;
