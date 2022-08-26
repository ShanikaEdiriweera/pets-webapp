function Button(props) {
  const {
    text,
    onClick,
    isIcon,
    icon,
    isPrimary,
  } = props;

  let className = "button";
  if (isPrimary) className += " primary";
  if (isIcon) className += " icon-button";

  return (
    <button
      onClick={ onClick }
      className={ className }
    >
      {
        isIcon ? <img src={ icon } alt="button icon" ></img> : text
      }
    </button>
  );
}

export default Button;
