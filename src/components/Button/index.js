import './button.css';

function Button(props) {
  const {
    text,
    onClick,
    isIcon,
    icon,
    isPrimary,
    styleOverride
  } = props;

  let className = "button";
  if (isPrimary) {
    className += " primary";
  } else {
    className += " secondary"
  }
  if (isIcon) className += " icon-button";

  return (
    <button
      onClick={ onClick }
      className={ className }
      style={ styleOverride }
    >
      {
        isIcon ? <img src={ icon } alt="button icon" ></img> : text
      }
    </button>
  );
}

export default Button;
