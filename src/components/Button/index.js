import './button.css';

function Button(props) {
  const {
    text,
    onClick,
    isIcon,
    icon,
    isPrimary,
    styleOverride,
    isMobile=false
  } = props;

  let className = "button";
  if (isPrimary) {
    className += " primary";
  } else {
    className += " secondary"
  }
  if (isIcon) className += " icon-button";
  if (isMobile) {
    className += " button-mobile";
  } else {
    className += " button-desktop";
  }

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
