import "./Button.css";
export const Button = ({
  children,
  onClick = () => {},
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      className={"primary"}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
